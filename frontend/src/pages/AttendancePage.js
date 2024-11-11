import React, { useEffect, useState } from 'react';

function AttendancePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a GET request to the backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/test`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default AttendancePage;
