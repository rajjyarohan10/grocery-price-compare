import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/search', { items });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* logo */}
      <img src="banana_logo.png" alt="Happy Banana Logo" className='app-logo' />

      <h1>Grocery Price Comparison</h1>
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        placeholder="Enter items, e.g., mangoes, peaches"
      />
      <button onClick={handleSearch}>Search Prices</button>

      {results && (
        <div>
          <h2>Price Comparison:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.store}: ${result.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
