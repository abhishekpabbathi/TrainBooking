# 🚆 TrainBooking - MERN Railway Reservation System

A full-stack railway reservation system built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application provides secure authentication, train search, ticket booking workflow, passenger management, simulated payment processing, and role-based admin operations.

This project demonstrates real-world full-stack development practices including REST APIs, JWT authentication, protected routes, CRUD operations, database management, and cloud deployment.

## 🌐 Live Demo

Frontend: https://train-booking-kappa.vercel.app

Backend API: https://trainbooking-8x9r.onrender.com

---

# 🚀 Features

## 👤 User Features

- User registration and login
- JWT-based authentication
- Protected user routes
- User profile management
- Search trains by source and destination
- View available trains
- Select travel class and quota
- Add passenger details
- Passenger master list management
- Ticket booking workflow
- Booking confirmation
- View booking history
- Ticket cancellation

## 🛡️ Admin Features

- Secure admin authentication
- Role-based authorization
- Admin dashboard
- Add new trains
- Manage train routes
- Maintain train information

---

# 🏗️ System Architecture

```
User
 |
React.js Frontend
 |
Axios API Requests
 |
Express.js REST API
 |
Node.js Backend
 |
MongoDB Database
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Hooks
- React Router
- Axios
- JavaScript ES6+
- CSS3

## Backend

- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- bcrypt Password Encryption
- Middleware Authorization

## Database

- MongoDB
- MongoDB Atlas

## Deployment

- Vercel (Frontend)
- Render (Backend)
- GitHub

---

# 📂 Project Structure

```
TrainBooking
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── context
│   │   └── utils
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔐 Security Implementation

- JWT token-based authentication
- Password hashing using bcrypt
- Protected API routes
- Role-based access control
- Environment variable configuration
- Secure MongoDB connection

---

# 🔄 Application Workflow

## User Workflow

```
Register
   ↓
Login
   ↓
Search Train
   ↓
Check Availability
   ↓
Select Train
   ↓
Add Passenger Details
   ↓
Payment Simulation
   ↓
Ticket Confirmation
   ↓
Booking History
```

## Admin Workflow

```
Admin Login
    ↓
Admin Dashboard
    ↓
Add Train
    ↓
Manage Train Data
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/abhishekpabbathi/TrainBooking.git

cd TrainBooking
```

## Backend Setup

```bash
cd backend

npm install

npm start
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

## Frontend Setup

```bash
cd frontend

npm install

npm start
```

Create `.env` file:

```
REACT_APP_API_URL=your_backend_url
```

---

# 📡 API Modules

## Authentication

- User Registration
- User Login
- Admin Login

## Train Management

- Search Trains
- Add Train
- Manage Routes

## Booking Management

- Create Booking
- View User Bookings
- Cancel Booking

## User Management

- Profile Management
- Passenger Management

---

# 🗄️ Database Models

## User Model

- Name
- Email
- Password
- Role

## Train Model

- Train Number
- Train Name
- Source
- Destination
- Schedule
- Available Seats

## Booking Model

- User Details
- Train Details
- Passenger Information
- Booking Status
- PNR Details

---

# 🚀 Deployment

Frontend:
- Deployed using Vercel

Backend:
- Deployed using Render

Database:
- Hosted using MongoDB Atlas

---

# 📈 Future Enhancements

- Real payment gateway integration
- Email and SMS notifications
- Real-time seat availability
- QR ticket verification
- Docker implementation
- Automated testing
- CI/CD pipeline

---

# 👨‍💻 Developer

## Abhishek Pabbathi

Full Stack Developer | MERN Stack Developer

Technical Skills:

- React.js
- Node.js
- Express.js
- MongoDB
- REST APIs
- JavaScript
- Git & GitHub

---

# ⭐ Project Highlights

- Production deployed MERN application
- Secure authentication system
- REST API architecture
- Database design and integration
- Cloud deployment workflow
- Real-world railway booking system implementation
