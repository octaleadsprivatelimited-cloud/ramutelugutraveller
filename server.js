const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3019;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build
const buildPath = path.join(__dirname, 'client', 'build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
}

// API route for company info
app.get('/api/info', (req, res) => {
  res.json({
    companyName: 'Holiday Hangout',
    founder: 'Ravi Telugu Traveller',
    description: 'World Tours & Travel Experiences',
    launchDate: '2026-01-14T00:00:00' // Launch date: January 14th, 2026
  });
});

// Serve React app for all other routes (if build exists)
if (fs.existsSync(buildPath)) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  // Development mode - helpful message if build doesn't exist
  app.get('/', (req, res) => {
    res.json({
      message: 'Backend API Server is running!',
      info: 'Please build the React app first: cd client && npm run build',
      apiEndpoint: 'http://localhost:3019/api/info'
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

