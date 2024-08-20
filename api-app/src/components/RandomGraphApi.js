
import React, { useState } from 'react';
import axios from 'axios';
import './RandomGraphApi.css';

const RandomGraphApi = () => {
  const [points, setPoints] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [side, setSide] = useState(100);
  const [selection, setSelection] = useState(5);

  const fetchFieldPoints = async () => {
    try {
      const response = await axios.post(`http://100022.pythonanywhere.com/v2/fieldrp/${apiKey}/`, {
        side,
        selection,
        choice: 0,
        value: 10
      });
      setPoints(response.data.listOfPoints);
    } catch (error) {
      console.error('Error fetching field points:', error);
    }
  };

  const fetchExcelPoints = async () => {
    try {
      const response = await axios.post(`http://100022.pythonanywhere.com/v2/excelrp/${apiKey}/`, {
        side,
        selection
      });
      setPoints(response.data.listOfPoints);
    } catch (error) {
      console.error('Error fetching excel points:', error);
    }
  };

  return (
    <div className="random-graph-api">
      <h1>Random Graph API</h1>
      <input
        type="text"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button onClick={fetchFieldPoints}>Fetch Field Points</button>
      <button onClick={fetchExcelPoints}>Fetch Excel Points</button>
      <div>
        {points.map((point, index) => (
          <div key={index}>
            <p>Point {index + 1}: ({point[0]}, {point[1]})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomGraphApi;
