import React, { useState, useEffect } from 'react';
import './ComingSoon.css';
import CountdownTimer from './CountdownTimer';

const ComingSoon = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: 'Holiday Hangout',
    founder: 'Telugu Traveller Ramu',
    description: 'World Tours & Travel Experiences',
    launchDate: '2026-01-14T00:00:00'
  });

  useEffect(() => {
    // Fetch company info from API
    const apiUrl = process.env.REACT_APP_API_URL || '/api/info';
    
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setCompanyInfo(data))
      .catch(err => {
        console.error('Error fetching company info:', err);
        // Use default values if API fails
      });
  }, []);

  return (
    <div className="coming-soon-container">
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div className="background-overlay"></div>
      <div className="content-wrapper">
        <div className="logo-section">
          <h1 className="company-name">{companyInfo.companyName}</h1>
          <div className="tagline">World Tours & Travel Experiences</div>
        </div>

        <div className="main-content">
          <h2 className="coming-soon-title">We're Coming Soon!</h2>
          <p className="coming-soon-description">
            Get ready for an extraordinary journey around the world. 
            We're crafting unforgettable travel experiences just for you.
          </p>

          <CountdownTimer targetDate={companyInfo.launchDate} />

          <div className="founder-info">
            <p className="founder-label">Founded by</p>
            <p className="founder-name">{companyInfo.founder}</p>
            <a 
              href="https://www.youtube.com/@TeluguTravellerRAMU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-link"
            >
              <svg className="youtube-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>

        <div className="footer">
          <p>Stay tuned for amazing adventures!</p>
          <p className="design-credit">
            <span className="designed-by-text">Designed By</span>{' '}
            <a 
              href="https://www.octaleads.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="design-company-link"
            >
              octaleads Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

