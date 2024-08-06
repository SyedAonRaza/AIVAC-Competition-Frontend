import React from "react";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>AIVAC Competition</h1>
      <p className="subtitle">AI-Value Creation Competition</p>
      <p><strong>Venue:</strong> NUST-SEECS</p>
      <p><strong>Date:</strong> 28 Sep 2024</p>
      <p><strong>First prize:</strong> 50,000 rs</p>
      <p><strong>Runners up (2):</strong> 20,000 rs each</p>
      <p className="rules">
        <strong>Rules:</strong> Any AI application, Budget under $30, One big problem with 3-4 sub-problems, Max 3 members
      </p>
      <p><strong>Registration Fee:</strong> 2,000 rs</p>
      <h2>Description</h2>
      <p className="description">
        Join the AI-Value Creation Competition at NUST-SEECS and showcase your innovative AI solutions. Compete for the top prize of 50,000 rs by solving real-world problems with your AI application, all under a budget of $30. Form a team of up to 3 members and dive into the challenge to make a significant impact. Don't miss this opportunity to demonstrate your skills and creativity!
      </p>
      <button className="register-button" onClick={() => window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank')}>Register Now</button>
    </div>
  );
}

export default App;
