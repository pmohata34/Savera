const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const BROCHURE_PATH = path.join(ASSETS_DIR, 'Savera_Brochure.pdf');

/**
 * Ensures a brochure PDF exists. If user drops their custom brochure into
 * backend/assets/Savera_Brochure.pdf, it uses that.
 * Otherwise, generates an authentic, branded brochure PDF with Savera details.
 */
async function ensureBrochurePDF() {
  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  if (fs.existsSync(BROCHURE_PATH)) {
    return BROCHURE_PATH;
  }

  console.log('[Brochure] Generating official Savera Tex Solution LLP brochure PDF...');

  const doc = new PDFDocument({
    size: 'A4',
    margin: 40,
    info: {
      Title: 'Savera Tex Solution LLP — Wholesale Sourcing Brochure',
      Author: 'Savera Tex Solution LLP',
      Subject: 'Textile Commission Agency Portfolio & Production Corridors',
      Keywords: 'textiles, wholesale, sarees, salwar suits, lehengas, fabrics, kolkata'
    }
  });

  const writeStream = fs.createWriteStream(BROCHURE_PATH);
  doc.pipe(writeStream);

  // ── Palette ──
  const primaryOrange = '#F16701';
  const darkOrange = '#D45500';
  const textDark = '#0F1318';
  const textMuted = '#4A5568';
  const creamBg = '#FAF8F5';

  // ── Page 1: Header & Company Profile ──
  doc.rect(0, 0, 595.28, 120).fill(primaryOrange);

  doc.fillColor('#FFFFFF')
     .font('Helvetica-Bold')
     .fontSize(24)
     .text('SAVERA TEX SOLUTION LLP', 40, 32, { tracking: 1.5 });

  doc.font('Helvetica')
     .fontSize(10)
     .fillColor('#FFE2CC')
     .text('PREMIER TEXTILE COMMISSION AGENCY • ESTABLISHED 1995 • KOLKATA', 40, 62);

  doc.fontSize(9)
     .fillColor('#FFFFFF')
     .text('Connecting Manufacturers, Weavers, Retailers & Wholesalers Across India & Overseas', 40, 78);

  // ── Key Stats Strip ──
  doc.rect(40, 135, 515.28, 48).fillAndStroke('#FFF3E8', '#F8B47D');
  doc.fillColor(primaryOrange).font('Helvetica-Bold').fontSize(14);
  doc.text('30+ Years', 60, 145);
  doc.fillColor(textMuted).font('Helvetica').fontSize(8).text('Industry Experience', 60, 163);

  doc.fillColor(primaryOrange).font('Helvetica-Bold').fontSize(14);
  doc.text('6 Major Hubs', 180, 145);
  doc.fillColor(textMuted).font('Helvetica').fontSize(8).text('Direct Loom Corridors', 180, 163);

  doc.fillColor(primaryOrange).font('Helvetica-Bold').fontSize(14);
  doc.text('700+ Partner Mills', 320, 145);
  doc.fillColor(textMuted).font('Helvetica').fontSize(8).text('Verified Weavers', 320, 163);

  doc.fillColor(primaryOrange).font('Helvetica-Bold').fontSize(14);
  doc.text('1,200+ Buyers', 460, 145);
  doc.fillColor(textMuted).font('Helvetica').fontSize(8).text('Retailers & Wholesalers', 460, 163);

  // ── About Section ──
  doc.y = 200;
  doc.fillColor(textDark).font('Helvetica-Bold').fontSize(13).text('ABOUT SAVERA TEX SOLUTION LLP', 40, 200);
  doc.rect(40, 216, 60, 2.5).fill(primaryOrange);

  doc.font('Helvetica').fontSize(9.5).fillColor(textMuted).text(
    'Savera Tex Solution LLP is a structured textile commission agency established on three decades of industry relationships, trust and market goodwill. We connect manufacturers with retailers and wholesalers across India, simplifying product discovery, verifying quality swatches, and facilitating mutually profitable trade.',
    40, 226, { width: 515.28, lineGap: 3 }
  );

  // ── 5 Core Product Categories ──
  doc.y = 285;
  doc.fillColor(textDark).font('Helvetica-Bold').fontSize(13).text('CORE PRODUCT PORTFOLIO', 40, 285);
  doc.rect(40, 301, 60, 2.5).fill(primaryOrange);

  const products = [
    { name: '1. Sarees', desc: 'Cotton, Silk, Designer & Partywear collections (Pure Varanasi silks, organzas, lightweight georgettes).' },
    { name: '2. Salwar Suits', desc: 'Stitched and unstitched dress materials, 3-piece tailored sets, Chanderi silks, modal, handblocks.' },
    { name: '3. Lehengas', desc: 'Bridal wear, festive and partywear lehengas with intricate zardozi, gota patti, and sequins.' },
    { name: '4. Indo Western', desc: 'Designer gowns, contemporary kurtis, co-ord jacket sets, and modern ethnic fusion wear.' },
    { name: '5. Fabrics', desc: 'Pure dyeable fabrics, mill-dyed solids, screen/digital prints, viscose, and cambric cotton yardage.' }
  ];

  let pY = 312;
  products.forEach(p => {
    doc.rect(40, pY, 515.28, 30).fillAndStroke(creamBg, '#FBD7B4');
    doc.fillColor(primaryOrange).font('Helvetica-Bold').fontSize(9.5).text(p.name, 50, pY + 8);
    doc.fillColor(textMuted).font('Helvetica').fontSize(8.5).text(p.desc, 140, pY + 9, { width: 405 });
    pY += 36;
  });

  // ── 6 Sourcing Hubs ──
  doc.y = 510;
  doc.fillColor(textDark).font('Helvetica-Bold').fontSize(13).text('DIRECT SOURCING CORRIDORS', 40, 510);
  doc.rect(40, 526, 60, 2.5).fill(primaryOrange);

  const hubs = [
    { city: 'Kolkata (HQ & Single Office)', state: 'West Bengal', role: 'Headquarters & order dispatch coordination' },
    { city: 'Surat', state: 'Gujarat', role: 'High-volume synthetic weaves, daily wear sarees & jacquards' },
    { city: 'Ahmedabad', state: 'Gujarat', role: 'Pure cambric cottons, mill-finish fabrics & printed yardage' },
    { city: 'Jaipur', state: 'Rajasthan', role: 'Authentic handblock prints, Sanganeri prints & fusion wear' },
    { city: 'Varanasi (Banaras)', state: 'Uttar Pradesh', role: 'Heritage Banarasi Katan silk, organza & bridal brocades' },
    { city: 'Bhagalpur', state: 'Bihar', role: 'Pure Tussar silk, textured handloom yardage & artisanal weaves' }
  ];

  let hY = 538;
  hubs.forEach(h => {
    doc.circle(46, hY + 5, 2.5).fill(primaryOrange);
    doc.fillColor(textDark).font('Helvetica-Bold').fontSize(8.5).text(`${h.city} (${h.state}): `, 55, hY);
    const offset = doc.widthOfString(`${h.city} (${h.state}): `);
    doc.fillColor(textMuted).font('Helvetica').fontSize(8.5).text(h.role, 55 + offset, hY);
    hY += 16;
  });

  // ── Footer / Contact Strip ──
  doc.rect(0, 750, 595.28, 92).fill('#1A202C');
  doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(10).text('SAVERA TEX SOLUTION LLP — REGISTERED CENTRAL OFFICE', 40, 762);
  doc.fillColor('#CBD5E0').font('Helvetica').fontSize(8.5)
     .text('Address: 1/C Burman Street, 3rd Floor, Room No. 312, Kolkata – 700007, West Bengal, India', 40, 778)
     .text('Phone: +91 94325 83461 / +91 94776 65429 / +91 94776 65430', 40, 792)
     .text('Email: info@saveratexsolutionllp.in • Business Hours: Mon–Sat 10:30 AM to 7:30 PM IST', 40, 806);

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log(`[Brochure] Generated brochure successfully at ${BROCHURE_PATH}`);
      resolve(BROCHURE_PATH);
    });
    writeStream.on('error', reject);
  });
}

function getBrochurePath() {
  const candidates = [
    path.join(ASSETS_DIR, 'Savera Tex Solution LLP Brochure.pdf'),
    path.join(ASSETS_DIR, 'Savera_Brochure.pdf'),
    path.join(__dirname, '..', '..', 'frontend', 'public', 'Savera Tex Solution LLP Brochure.pdf'),
    path.join(__dirname, '..', '..', 'frontend', 'public', 'brochure.pdf')
  ];

  for (const p of candidates) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  return fs.existsSync(BROCHURE_PATH) ? BROCHURE_PATH : null;
}

module.exports = {
  ensureBrochurePDF,
  getBrochurePath,
  BROCHURE_PATH
};

