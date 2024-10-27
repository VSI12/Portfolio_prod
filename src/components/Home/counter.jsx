import React, { useState, useEffect } from 'react';

const ViewCounter = () => {
  // State to hold the view counter and error message
  const [views, setViews] = useState(null);
  const [error, setError] = useState(null);

  // URL for your Lambda Function (replace with your actual Lambda function URL)
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  // Function to fetch the counter from the Lambda URL
  const fetchCounter = async () => {
    try {
      const response = await fetch(lambdaUrl);

      // Check if response is okay (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setViews(data.views); // Update state with the fetched view count
    } catch (err) {
      console.error('Error fetching counter:', err);
      setError(err.message); // Set error message in state
    }
  };

  // useEffect to call the fetchCounter function when the component is mounted
  useEffect(() => {
    fetchCounter();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Page Views: {views === null ? 'Loading...' : views}</p>
      )}
    </div>
  );
};

export default ViewCounter;
