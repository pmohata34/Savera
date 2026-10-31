# Savera Tex Solution LLP — Full-Stack Web Portal

> **Premier Pan-India Textile Commission Agency | Established 1995**  
> Connecting Manufacturers, Weavers, Retailers, and Wholesalers Across India and International Markets.

---

## 🏛️ Project Architecture

```
savera-portal/
├── frontend/                  # React + Vite + Tailwind CSS Frontend
│   ├── public/
│   │   ├── fonts/             # Plus Jakarta Sans, Playfair Display, Cinzel
│   │   └── photos/            # Verified product collections & founder portraits
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Glassmorphism capsule navigation + mobile drawer
│   │   │   ├── Hero.jsx            # Architectural headline, pure visual, 4 trust metrics
│   │   │   ├── WhyChoose.jsx       # 7 Institutional Pillars luxury card grid
│   │   │   ├── HowWeWork.jsx       # 6-Step sourcing & order workflow pipeline
│   │   │   ├── SourcingMap.jsx     # 3D Pan-India sourcing map with 6 key hubs
│   │   │   ├── ProductRange.jsx    # Sarees, suits, lehengas, indo-western, bed sheets
│   │   │   ├── Founder.jsx         # Founder profile: Mr. Vineet Kr. Taparia
│   │   │   ├── GrowthJourney.jsx   # Infinite graph curve (2026 -> 1995 foundational root)
│   │   │   ├── ConnectForm.jsx     # Sourcing inquiry form connected to Backend API
│   │   │   └── Footer.jsx          # Corporate compliance & legal credentials
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   # Node.js + Express API Backend
│   ├── data/
│   │   └── leads.json         # Structured inquiry storage (file-backed JSON store)
│   ├── server.js              # Express REST API with input validation & WhatsApp bridge
│   ├── package.json
│   └── .env.example
│
├── _references/               # (Git-ignored) Local master designs & documents
│   ├── savera_designer_masterpiece.html
│   ├── savera_india_sourcing_map_6_cities.jpg
│   ├── india_infographic_map.svg
│   ├── Savera_Master_Proposal.docx
│   ├── Savera_Master_Presentation.pptx
│   └── assets/
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Run the Development Servers

**Start the Backend API (Port 5000):**
```bash
npm run dev:backend
```

**Start the React Frontend (Port 5173):**
```bash
npm run dev:frontend
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 Backend API Endpoints

| Method | Endpoint | Description |
|:---:|---|---|
| `GET` | `/api/health` | Service health status check |
| `POST` | `/api/inquire` | Submit sourcing inquiry (validates fields, stores lead, returns WhatsApp direct link) |
| `GET` | `/api/leads` | Retrieve all registered sourcing inquiries |

### Sourcing Inquiry Payload:
```json
{
  "firmName": "Taparia Creations",
  "personName": "Rajesh Kumar",
  "mobileNumber": "9876543210",
  "cityState": "Kolkata, West Bengal",
  "categories": ["Sarees (Surat & Banaras)", "Salwar Suits & Dress Materials"],
  "message": "Looking for wedding season bridal collections and daily wear sarees."
}
```

---

## 🔒 Corporate & Trade Credentials

* **Entity Name:** Savera Tex Solution LLP (LLPIN: ACV-3317)
* **Founder:** Mr. Vineet Kr. Taparia (Experience Since 1995)
* **Registered Office:** Kolkata - 700007, West Bengal, India
* **Sourcing Hubs:** Surat, Varanasi, Jaipur, Ahmedabad, Bhagalpur, Kolkata (HQ)
* **Client Footprint:** 500+ Cities Across All 29 States, Union Territories & International Markets

