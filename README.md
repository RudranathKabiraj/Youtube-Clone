# 📺 YouTube Clone (MERN Stack)

A full-stack YouTube-style video-sharing app built with **React**, **Node.js**, **Express**, and **MongoDB**.  
This project includes user authentication, channel creation, video uploads, like/dislike functionality, comments, and a responsive UI — all styled to resemble YouTube.

---

## 🚀 Live Demo

| Type             | Link                                                                 |
|------------------|----------------------------------------------------------------------|
| Deployed App     | [Live Frontend](Yet to be deployed)                                  |
| Demo Video       |                                                                      |

---



## ✨ Features

| Feature               | Description                                                             |
|------------------------|----------------------------------------------------------------------  |
| 🔐 User Auth           | Register, login, and manage sessions with JWT                         |
| 👤 Channels            | Create, update, and manage personal channels                          |
| 📹 Video Upload        | Add title, description, category, and thumbnail via URL               |
| 🎬 Video Player        | Watch videos with interactive UI                                      |
| 💬 Comments            | Add/edit/delete comments under videos                                 |
| 📱 Responsive UI       | Fully responsive YouTube-style layout                                 |
| 📑 Sidebar & Header    | Includes search, avatar, and toggleable sidebar                       |
| 📺 Recommendations     | “Up Next” sidebar with related videos                                 |
| ❌ 404 Page            | Custom YouTube-style Not Found page                                   |
| ⏳ Lazy Loading        | Optimized with React lazy loading                                     |
| 📆 Date Formatting     | Upload date displayed using `date-fns`                                |

---

## 🧰 Tech Stack

| Layer     | Technologies Used                                 |
|-----------|---------------------------------------------------|
| Frontend  | React 19, React Router v7, Axios, Vite             |
| Backend   | Node.js, Express 5, MongoDB, Mongoose              |
| Auth      | JWT, bcrypt                                        |
| Styling   | Tailwindcss                                        |
| Utilities | date-fns                                           |

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/RudranathKabiraj/Youtube-Clone.git
cd Youtube-Clone
```

---

### 🛠 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` directory:

```env
PORT= 8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```


Start the backend server:

```bash
npm start
```

Backend runs at: [http://localhost:8000]

---

### 🌐 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at: [http://localhost:5173]

---

## 👨‍💻 Usage Guide

| Step                  | Action                                                             |
|-----------------------|--------------------------------------------------------------------|
| 📝 Register/Login     | Avatar is optional — auto-generated if empty                       |
| 📺 Upload Video       | Add title, description, category, and thumbnail                    |
| 🔍 Browse             | Filter by category or search by title                              |
| ❤️ Interact           | Like/dislike videos, add/edit/delete your own comments             |
| 👨‍💻 Manage Channel    | View your own channel, uploaded videos                             |

---

## 📂 Project Structure

```
Youtube-Clone/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
└── README.md
```

---

## 💡 Notes & Design Decisions

| Topic            | Details                                                                 |
|------------------|-------------------------------------------------------------------------|
| ❗ Security       | JWT-based auth only; no production-grade security measures              |
| 🖼️ File Uploads   | Videos are URL-based (no file storage implemented)                      |
| 💰 Monetization   | No subscriptions or payment functionality — UI only                    |
| 📦 API Structure  | All endpoints prefixed with `/api/`                                    |
| ⚠️ Error Handling | Friendly user messages for failed actions                              |
| ♿ Accessibility  | Basic keyboard navigation & focus support                              |

---

## 👤 Author

**Project by RUDRANATH KABIRAJ — Inspired by YouTube's UI/UX**


- Repository: [Youtube-Clone](https://github.com/RudranathKabiraj/Youtube-Clone)

---