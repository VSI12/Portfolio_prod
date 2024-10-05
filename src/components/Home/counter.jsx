import React, { useState, useEffect } from 'react';

const ViewCounter = () => {
  // State to hold the view counter
  const [views, setViews] = useState(null); // Initially set to null to show "Loading..."

  // URL for your Lambda Function (replace with your actual Lambda function URL)
  const lambdaUrl = 'https://qfoh46wibq2p5gzdqv5cschj2u0nayax.lambda-url.us-east-1.on.aws/';

  // Function to fetch the counter from the Lambda URL
  const fetchCounter = async () => {
    try {
      const response = await fetch(lambdaUrl);
      const data = await response.json();
      setViews(data.views); // Update state with the fetched view count
    } catch (error) {
      console.error('Error fetching counter:', error);
      setViews('Error'); // Handle errors
    }
  };

  // useEffect to call the fetchCounter function when the component is mounted
  useEffect(() => {
    fetchCounter();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <p>Page Views: {views === null ? 'Loading...' : views}</p>
    </div>
  );
};

export default ViewCounter;
