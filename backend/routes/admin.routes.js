const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const passport = require('passport');
const { isAuthenticated } = require('../middleware/auth');

// Create new admin (protected route)

// router.post('/create',async (req,res)=>{
//   let {username,password,email}=req.body;
//   let newAdmin = new Admin({username,email});
//   const registeredAdmin = await Admin.register(newAdmin,password);
  
//   temp data ->
//   username:varun
// email:varun@gmail.com
// password:1234
  
// });

// Login admin
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, admin, info) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!admin) {
      return res.status(401).json({ error: info.message || 'Invalid credentials' });
    }
    req.logIn(admin, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error during login' });
      }
      res.json({ 
        message: 'Login successful'
      });
    });
  })(req, res, next);
});

// Logout admin
router.post('/logout', isAuthenticated, (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Error during logout' });
    }
    res.json({ message: 'Logout successful' });
  });
});

// // Get current admin profile
// router.get('/profile', isAuthenticated, (req, res) => {
//   res.json(req.user.getPublicProfile());
// });

module.exports = router; 