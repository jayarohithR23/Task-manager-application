# TaskFlow - Modern Task Management Application

A comprehensive full-stack web application built with the MERN stack for efficient task management and productivity enhancement.

## 🌟 Project Overview

TaskFlow is a feature-rich task management solution that helps users organize their daily activities, track progress, and maintain productivity through an intuitive and responsive interface. Built with modern web technologies, it provides a seamless experience across all devices.

## ✨ Key Features

### 🔐 User Management
- Secure user registration and authentication
- JWT-based session management
- User profile management
- Password encryption with bcrypt

### 📋 Task Operations
- Create, read, update, and delete tasks
- Real-time task status updates
- User-specific task organization
- Timestamp tracking for all activities

### 🎨 User Experience
- Responsive design for all screen sizes
- Modern UI with Tailwind CSS
- Interactive notifications and feedback
- Smooth navigation with React Router
- Dynamic page titles and routing

### 🛡️ Security & Performance
- Protected API endpoints
- Input validation on both client and server
- CORS configuration for cross-origin requests
- Optimized database queries with MongoDB

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication

### Development Tools
- **Nodemon** - Auto-restart server
- **Concurrently** - Run multiple commands
- **ESLint** - Code quality enforcement

## 📁 Project Structure

```
TaskFlow/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── redux/          # State management
│   │   ├── hooks/          # Custom React hooks
│   │   └── api/            # API integration
├── backend/                 # Node.js server
│   ├── controllers/        # Request handlers
│   ├── models/            # Database schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Custom middleware
│   └── utils/             # Helper functions
└── package.json            # Root dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd TaskFlow
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment setup**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the application**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Fetch user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Remove task

### Profile
- `GET /api/profile` - Get user profile

## 🎯 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend
- `npm run dev-server` - Start backend only
- `npm run dev-client` - Start frontend only
- `npm run install-all` - Install all dependencies

### Backend
- `npm run dev` - Start with nodemon
- `npm start` - Start production server

### Frontend
- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests

## 🔧 Configuration

### Database
The application uses MongoDB as the primary database. Ensure your MongoDB instance is running and accessible.

### Environment Variables
- `MONGODB_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode

## 🚀 Deployment

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Production
```bash
cd backend
npm start
```

### Environment Setup
Ensure all environment variables are properly configured in your production environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using modern web technologies**


