import React, { useState, useEffect } from 'react';

function WeatherDisplay() {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching weather data (replace with actual API call)
    setTimeout(() => {
      const success = Math.random() > 0.1; //Simulate error sometimes.
      if (success) {
        setTemperature(Math.floor(Math.random() * 30) + 10); // Random temperature between 10-40 degrees
        setLoading(false);
      } else {
        setError("Failed to fetch weather data.");
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Current Temperature: {temperature}°C</p>
    </div>
  );
}

export default WeatherDisplay;