import React, { useState } from 'react';
import axios from 'axios';

const QueryWidget = () => {
  const [condition, setCondition] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleQuery = async () => {
    try {
      const response = await axios.get(`/api/v1/execute_query`, {
        params: { condition }
      });
      setResult(response.data);  // Store the raw JSON data
      setError(null);  // Reset error if successful
    } catch (err) {
      setError(err.message);
      setResult(null);  // Reset result on error
    }
  };

  return (
    <div>
      <h2>Query Executor</h2>
      <input
        type="text"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Enter condition"
      />
      <button onClick={handleQuery}>Execute Query</button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      <h3>Results:</h3>
      <pre>
        {result ? JSON.stringify(result, null, 2) : 'No data yet, please execute a query.'}
      </pre>
    </div>
  );
};

export default QueryWidget;
