# 🌟 Intern Dashboard (Dummy Project)

A simple full stack intern dashboard project built using **React** for frontend and **Node.js + Express+ MongoDB** for backend. This project mimics an intern referral campaign with static data and includes login/signup UI, dashboard, and dummy data integration.
## 🌐 Live Site

🔗 [Click here to view the live project](https://intern-portal-for-she-can-foundatio-theta.vercel.app/)


## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## 📌 Features

### ✅ Frontend (React)

- [x] **Login/Signup Page** (No real authentication)
- [x] **Dashboard**
  - Intern name
  - Dummy referral code (e.g., `lamiya2025`)
  - Total donations raised (static number from backend)
  - Rewards/unlockables (static content)
- [x] **Leaderboard** (Optional page using dummy data)

### ✅ Backend (Node + Express)

- [x] REST API that returns:
  - Intern Name
  - Referral Code
  - Amount Raised
  -Leaderboard data
> 

---

## 📁 Folder Structure
intern-dashboard/
├── charity-server/ → Express backend
│ └── index.js
├── charity-client/ → React frontend
│ └── src/
│ └── components/
│ └── App.jsx
├── README.md


---

## 📦 How to Run Locally

### 🔧 Backend (Express)

```bash
cd charity-server
npm install
npm start
Runs on: http://localhost:5000
💻 Frontend (React)
cd charity-client
npm install
npm run dev
Runs on: http://localhost:5173 (or whatever Vite says)
✨ Author
Lamiya Rahman Khan
Email: lamiyarahmankhan01@gmail.com
Location: Dhaka, Bangladesh