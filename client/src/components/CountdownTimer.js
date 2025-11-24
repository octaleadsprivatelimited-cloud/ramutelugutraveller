import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

