import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/`)
      .then(res => setMessage(res.data))
      .catch(err => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Portfolio</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
