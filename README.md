# Holiday Hangout - Coming Soon Landing Page

A beautiful coming soon landing page for Holiday Hangout, a world tours company founded by Ravi Telugu Traveller.

## Features

- ✨ Modern, animated gradient background
- ⏰ Real-time countdown timer
- 📱 Fully responsive design
- 🎨 Beautiful glassmorphism UI effects
- 🌍 World tours theme

## Tech Stack

- **Frontend**: React 18
- **Backend**: Node.js with Express
- **Styling**: CSS3 with animations

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install backend dependencies:**
   ```bash
   npm install
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Application

#### Development Mode

1. **Start the backend server:**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3019`

2. **In a new terminal, start the React app:**
   ```bash
   cd client
   npm start
   ```
   The React app will open on `http://localhost:3000` (or another port if 3000 is taken) and will proxy API calls to the backend on port 3019

#### Production Mode

1. **Build the React app:**
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```
   The app will be served on `http://localhost:3019`

## Configuration

To change the launch date, edit the `launchDate` in `server.js`:

```javascript
launchDate: '2024-12-31T23:59:59' // Update this date
```

## Project Structure

```
holiday-hangout/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ComingSoon.js
│   │   │   ├── ComingSoon.css
│   │   │   ├── CountdownTimer.js
│   │   │   └── CountdownTimer.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server.js
├── package.json
└── README.md
```

## Features Details

- **Countdown Timer**: Real-time countdown showing days, hours, minutes, and seconds until launch
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Background**: Beautiful gradient animation
- **Glassmorphism**: Modern UI with glass-like effects
- **Smooth Animations**: Fade-in and pulse animations for better user experience

## Founder

**Ravi Telugu Traveller** - Founder of Holiday Hangout

## License

ISC

