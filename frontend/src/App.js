import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Use your VM public IP instead of localhost
  const BASE_URL = 'http://3.6.160.86:5000';

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/customers`);
      setCustomers(res.data);
    } catch (err) {
      console.error('Error fetching customers:', err);
    }
  };

  const addCustomer = async () => {
    if (!name || !email) return;
    try {
      const res = await axios.post(`${BASE_URL}/customers`, { name, email });
      setCustomers([res.data, ...customers]);
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error adding customer:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Customer Demo App</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        />
        <button onClick={addCustomer} style={{ marginLeft: '0.5rem' }}>
          Add Customer
        </button>
      </div>

      <h2>Customers</h2>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} ({c.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
