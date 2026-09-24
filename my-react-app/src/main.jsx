import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// JSX: Expressions
function Cristiano() {

  // Convert meters to feet and inches
  const metersToFeetAndInches = (meters) => {
    const totalInches = meters * 39.3701;
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return `${feet} feet ${inches.toFixed(2)} inches`;
  };

  // Calculate goals per game
  const goalsPerGame = (goals, games) => {
    return goals / games;
  };

  // Calculate a football's speed after being kicked
  const final_velocity = (initial_velocity, acceleration, time) => {
    // Return the ball speed in km/h
    return (initial_velocity + (acceleration * time)) * 3.6;

  };

  const challan_ticket = (speed, speed_limit) => {
    if (speed > speed_limit) {
      return `You are over the speed limit by ${speed - speed_limit} km/h. You will receive a challan ticket.`;
    } else {
      return "You are within the speed limit. No challan ticket for you.";
    }
  }

  return (
    <>
      <h1>Cristiano is the GOAT</h1>
      <h2>His height is <em>{metersToFeetAndInches(1.87)}</em>.</h2>
      <h2>His goals per game ratio is <b>{goalsPerGame(979, 1337).toFixed(2)}</b></h2>
      <h2>His powerful shot sent the football flying at {final_velocity(40, 5, 2)} km/h.</h2>
      <h2>The referee said: {challan_ticket(final_velocity(40, 5, 2), 120)}</h2>
    </>
  );
}
createRoot(document.getElementById('rooter')).render(
  <StrictMode>
    <Cristiano />
  </StrictMode>,
)
