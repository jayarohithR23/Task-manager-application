# TaskFlow Setup Guide

## 🚀 Quick Start

This guide will help you set up TaskFlow on your local machine and prepare it for deployment.

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Git**
- **Code Editor** (VS Code recommended)

## 🔧 Environment Configuration

### 1. Backend Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Database Configuration
MONGODB_URL=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_2025

# Server Configuration
PORT=5000
NODE_ENV=development

# Optional: CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### 2. MongoDB Setup

#### Option A: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `your_mongodb_connection_string` in `.env`

#### Option B: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/taskflow`

## 📦 Installation

### 1. Install Dependencies

```bash
# Install all dependencies (root, frontend, and backend)
npm run install-all
```

### 2. Verify Installation

```bash
# Check if all packages are installed
npm list --depth=0
cd frontend && npm list --depth=0
cd ../backend && npm list --depth=0
```

## 🚀 Running the Application

### Development Mode

```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
npm run dev-server    # Backend only
npm run dev-client    # Frontend only
```

### Production Mode

```bash
# Build frontend
cd frontend
npm run build

# Start backend
cd ../backend
npm start
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api

## 🔍 Testing the Setup

### 1. Backend Health Check
```bash
curl http://localhost:5000/api/health
```

### 2. Frontend Access
Open http://localhost:3000 in your browser

### 3. Database Connection
Check the console for MongoDB connection success message

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process
taskkill /PID <process_id> /F
```

#### 2. MongoDB Connection Failed
- Check your connection string
- Verify network access
- Check MongoDB service status

#### 3. Dependencies Not Found
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 4. Frontend Build Issues
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 API Testing

### Using Postman or Similar Tools

1. **User Registration**
   ```
   POST http://localhost:5000/api/auth/signup
   Content-Type: application/json
   
   {
     "name": "Test User",
     "email": "test@example.com",
     "password": "password123"
   }
   ```

2. **User Login**
   ```
   POST http://localhost:5000/api/auth/login
   Content-Type: application/json
   
   {
     "email": "test@example.com",
     "password": "password123"
   }
   ```

3. **Create Task** (requires authentication)
   ```
   POST http://localhost:5000/api/tasks
   Authorization: Bearer <your_jwt_token>
   Content-Type: application/json
   
   {
     "title": "Test Task",
     "description": "This is a test task",
     "priority": "high"
   }
   ```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use strong, unique JWT secrets
- Rotate secrets regularly in production

### Database Security
- Use strong passwords for database users
- Enable network access restrictions
- Regular database backups

### API Security
- Implement rate limiting in production
- Use HTTPS in production
- Validate all input data

## 🚀 Deployment Preparation

### 1. Environment Variables
Update `.env` for production:
```env
NODE_ENV=production
MONGODB_URL=your_production_mongodb_url
JWT_SECRET=your_production_jwt_secret
PORT=5000
```

### 2. Build Frontend
```bash
cd frontend
npm run build
```

### 3. Start Backend
```bash
cd backend
npm start
```

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)

## 🤝 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the console logs
3. Check the network tab in browser dev tools
4. Open an issue in the repository

---

**Happy Coding! 🎉**
