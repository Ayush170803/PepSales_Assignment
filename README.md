# 📨 PepSales Notification Service

A backend service to send notifications to users via **📧 Email**, **📱 SMS**, and **🖥️ In-App** messages. Built using **Node.js**, **Express.js**, **MongoDB**, and **JWT**.

---

## 🧰 Tech Stack

- ⚙️ **Node.js / Express.js**
- 🗂️ **MongoDB** + Mongoose
- 🔐 **JWT** for authentication
- 🔑 **Bcrypt** for password hashing
- 🧪 **Dotenv** for environment config

---

## ✅ Features

- 👤 User Signup / Signin / Signout with JWT
- 🔔 Send Notifications (Email, SMS, In-App)
- 📬 Get user-specific notifications
- 🔒 Auth middleware to secure endpoints

---

## 📁 Folder Structure
```
├── src/
│ ├── config/
│ │ ├── config.js
│ │ └── database.js
│ ├── Middlewares/
│ │ └── auth.js
│ ├── Models/
│ │ ├── user.js
│ │ └── notification.js
│ ├── Routes/
│ │ ├── index.js
│ │ ├── notification.js
│ │ └── user.js
│ ├── utils/
│ │ └── validation.js
│ └── app.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

---

## 📡 API Endpoints

### 👥 Auth Routes

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| POST   | `/api/v1/user/signup` | Register new user 🔐     |
| POST   | `/api/v1/user/signin` | Login and receive token |
| POST   | `/api/v1/user/signout`| Logout user             |

### 🔔 Notification Routes

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| POST   | `/api/v1/notification/send`              | Send a notification             |
| GET    | `/api/v1/user/:id/notifications`    | Get all notifications for user 🔒 |

---

## 🚀 Setup Instructions

### 1. 📥 Clone the repository

```bash
git clone https://github.com/Ayush170803/PepSales_Assignment.git)
cd PepSales_Assignment
```
---
### 2. 📦 Install dependencies

```bash
npm install
```
---
### 3. ⚙️ Create .env file

```bash
DATABASE_URL=your_mongodb_connection_url
```
---
### 4. ▶️ Start the server

```bash
node src/app.js
** App will run at http://localhost:3000 **
```
---
## 🧪 Admin Test Credentials

Use the following credentials to log in as an admin:

```
emailId = "admin@gmail.com"
password = "Ayush@123"
```
---
## 📈 Future Improvements
- 🟢 Real-time in-app notifications using WebSockets (e.g., Socket.IO)
- 🗑️ Allow users to delete notifications
- 🧠 Admin panel to view and manage all notifications
- 🧪 Unit and integration test coverage
- 🔐 OAuth support (Google, GitHub) for signin
---

## 🤝 Contributing
- Contributions are welcome!
---
## 🧑‍💻 Author
- [Ayush Kumar](https://github.com/Ayush170803)
