const { Pool } = require('pg');
const { proto, initAuthCreds, BufferJSON } = require('@whiskeysockets/baileys');

/**
 * PostgreSQL Auth State Adapter for Baileys
 * Permanently persists session credentials, pre-keys, and app state into a PostgreSQL database table.
 * Survives all container restarts, sleeps, and redeployments on Render.
 */
async function usePostgresAuthState(connectionString) {
  const pool = new Pool({
    connectionString,
    ssl: connectionString.includes('localhost') || connectionString.includes('127.0.0.1')
      ? false
      : { rejectUnauthorized: false }
  });

  // Ensure table exists
  await pool.query(`
    CREATE TABLE IF NOT EXISTS baileys_auth (
      key VARCHAR(255) PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  const writeData = async (data, key) => {
    try {
      const json = JSON.stringify(data, BufferJSON.replacer);
      await pool.query(
        `INSERT INTO baileys_auth (key, value)
         VALUES ($1, $2)
         ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
        [key, json]
      );
    } catch (err) {
      console.error(`[PG Auth] Error writing ${key}:`, err.message);
    }
  };

  const readData = async (key) => {
    try {
      const res = await pool.query('SELECT value FROM baileys_auth WHERE key = $1', [key]);
      if (res.rows.length === 0) return null;
      return JSON.parse(res.rows[0].value, BufferJSON.reviver);
    } catch (err) {
      console.error(`[PG Auth] Error reading ${key}:`, err.message);
      return null;
    }
  };

  const removeData = async (key) => {
    try {
      await pool.query('DELETE FROM baileys_auth WHERE key = $1', [key]);
    } catch (err) {
      console.error(`[PG Auth] Error removing ${key}:`, err.message);
    }
  };

  const clearAllData = async () => {
    try {
      await pool.query('DELETE FROM baileys_auth');
      console.log('[PG Auth] Cleared all authentication records from PostgreSQL.');
    } catch (err) {
      console.error('[PG Auth] Error clearing auth table:', err.message);
    }
  };

  const creds = (await readData('creds')) || initAuthCreds();

  return {
    state: {
      creds,
      keys: {
        get: async (type, ids) => {
          const data = {};
          await Promise.all(
            ids.map(async (id) => {
              let value = await readData(`${type}-${id}`);
              if (type === 'app-state-sync-key' && value) {
                value = proto.Message.AppStateSyncKeyData.fromObject(value);
              }
              data[id] = value;
            })
          );
          return data;
        },
        set: async (data) => {
          const tasks = [];
          for (const category in data) {
            for (const id in data[category]) {
              const value = data[category][id];
              const key = `${category}-${id}`;
              tasks.push(value ? writeData(value, key) : removeData(key));
            }
          }
          await Promise.all(tasks);
        }
      }
    },
    saveCreds: async () => {
      return writeData(creds, 'creds');
    },
    clearAllData
  };
}

module.exports = {
  usePostgresAuthState
};
