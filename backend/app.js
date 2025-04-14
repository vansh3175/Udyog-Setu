const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');


// Load environment variables
dotenv.config();

// Import models
const Admin = require('./models/admin');
const Scheme = require('./models/scheme');
const Zone = require('./models/zone');

// Import routes
const adminRoutes = require('./routes/admin.routes');
const schemeRoutes = require('./routes/scheme.routes');
const zoneRoutes = require('./routes/zone.routes');



// Create Express app
const app = express();

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpsOnly : true,
    expires : Date.now() + 1000*24*60*60*7,    //in milliseconds
    maxAge : 1000*24*60*60*7 
  }
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));  //passport will use local strategy

passport.serializeUser(Admin.serializeUser());  // storing user in session
passport.deserializeUser(Admin.deserializeUser());  // removing user from the session

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/zones', zoneRoutes);

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/udyog-setu', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Udyog Setu API' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Start server
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
