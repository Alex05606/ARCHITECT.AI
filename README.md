# 🏡 Architect.AI

An AI-powered web application that helps users **visualize and choose the perfect colors for their house**.
Users can upload their home image, manually paint colors, or get **AI-based color suggestions**.

---

## 🚀 Features

### 🔐 Authentication

* User Registration (Email & Password)
* Login System with JWT Authentication
* Secure password hashing using bcrypt

### 🎨 Design System

* Upload house image
* Manual color painting (Canvas Editor)
* Color picker with:

  * Color codes
  * Color names

### 🤖 AI Assistant (Planned / In Progress)

* Analyze uploaded image
* Suggest best matching color palettes
* Provide color names + hex codes

### 📥 Export

* Download final designed image

---

## 🧠 Tech Stack

### Frontend

* HTML5
* Tailwind CSS
* Vanilla JavaScript

### Backend

* Node.js
* Express.js
* JWT (jsonwebtoken)
* bcryptjs
* dotenv

### Database

* Turso (SQLite-based cloud DB) *(planned integration)*

---

## 📁 Project Structure

```
PROJECT/
│
├── Client/
│   ├── landing.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── canvas.html
│   ├── ai.html
│   └── explore.html
│
├── Server/
│   ├── server.js
│   ├── routes/
│   │     └── authRoutes.js
│   ├── controllers/
│   │     └── authController.js
│
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the project

```bash
git clone https://github.com/your-username/architect-ai.git
cd architect-ai
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` file

```env
PORT=5000
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run server

```bash
node Server/server.js
```

---

### 5️⃣ Open frontend

Open in browser:

```bash
Client/landing.html
```

---

## 🔗 API Endpoints

### 🔐 Auth Routes

#### Register

```http
POST /api/auth/register
```

Body:

```json
{
  "name": "User",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

#### Login

```http
POST /api/auth/login
```

Body:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## 🔄 User Flow

1. Open Landing Page
2. Click **Get Started → Login Page**
3. Click **Register → Create Account**
4. Login → Dashboard
5. Upload image
6. Design using:

   * Manual Canvas
   * AI Suggestions
7. Download final image

---

## 🧩 Future Improvements

* ✅ Turso Database integration
* 🤖 Advanced AI color recommendation
* 🖼️ Image segmentation for smart painting
* ☁️ Cloud image storage
* 📱 Mobile responsive improvements

---

## 👨‍💻 Author

**Anirban Mandal**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
