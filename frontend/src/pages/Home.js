import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  /* useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/example`)
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []); */

  return (
    <div className="container">
      <h1></h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
