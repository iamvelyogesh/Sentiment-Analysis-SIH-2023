import React, { useState } from 'react';
import axios from 'axios';
// ... (import statements)

const Twet = () => {
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState('all');
  const [analysisResult, setAnalysisResult] = useState([]); // Initialize as an empty array

  const handleTextAnalysis = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/tweet', {
        word: inputText,
        count: inputNumber,
        emotion: selectedEmotion,
      });
      const result = response.data.Result;
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error while making the request:', error);
    }
  };

  const renderTable = () => {
    switch (selectedEmotion) {
      case 'all':
        return renderAllTable();
      case 'neg':
        return renderNegativeTable();
      case 'neu':
        return renderNeutralTable();
      case 'pos':
        return renderPositiveTable();
      default:
        return null;
    }
  };

  const renderAllTable = () => {
    return (
      <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Polarity</th>
              <th>Subjectivity</th>
              <th>Compound Score</th>
              <th>Compound Score Sentiment</th>
              <th>Text</th>
              <th>User</th>
              <th>Timestamp</th>
              <th>Emotion</th>
            </tr>
          </thead>
          <tbody>
            {analysisResult.map((r, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{r.sentiment.polarity}</td>
                <td>{r.sentiment.subjectivity}</td>
                <td>{r.compound_score}</td>
                <td>{r.compound_score_sentiment}</td>
                <td>{r.text}</td>
                <td>{r.user}</td>
                <td>{r.timestamp}</td>
                <td>{r.emotion}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
  };

  const renderNegativeTable = () => {
    return (
      <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Polarity</th>
          <th>Subjectivity</th>
          <th>Compound Score</th>
          <th>Compound Score Sentiment</th>
          <th>Text</th>
          <th>User</th>
          <th>Timestamp</th>
          <th>Emotion</th>
        </tr>
      </thead>
      <tbody>
        {analysisResult
          .filter((r) => r.compound_score_sentiment === 'Negative')
          .map((r, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{r.sentiment.polarity}</td>
              <td>{r.sentiment.subjectivity}</td>
              <td>{r.compound_score}</td>
              <td>{r.compound_score_sentiment}</td>
              <td>{r.text}</td>
              <td>{r.user}</td>
              <td>{r.timestamp}</td>
              <td>{r.emotion}</td>
            </tr>
          ))}
      </tbody>
    </table>
    );
  };

  const renderNeutralTable = () => {
    return (
      <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Polarity</th>
          <th>Subjectivity</th>
          <th>Compound Score</th>
          <th>Compound Score Sentiment</th>
          <th>Text</th>
          <th>User</th>
          <th>Timestamp</th>
          <th>Emotion</th>
        </tr>
      </thead>
      <tbody>
        {analysisResult
          .filter((r) => r.compound_score_sentiment === 'Neutral')
          .map((r, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{r.sentiment.polarity}</td>
              <td>{r.sentiment.subjectivity}</td>
              <td>{r.compound_score}</td>
              <td>{r.compound_score_sentiment}</td>
              <td>{r.text}</td>
              <td>{r.user}</td>
              <td>{r.timestamp}</td>
              <td>{r.emotion}</td>
            </tr>
          ))}
      </tbody>
    </table>
    );
  };

  const renderPositiveTable = () => {
    return (
      <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Polarity</th>
          <th>Subjectivity</th>
          <th>Compound Score</th>
          <th>Compound Score Sentiment</th>
          <th>Text</th>
          <th>User</th>
          <th>Timestamp</th>
          <th>Emotion</th>
        </tr>
      </thead>
      <tbody>
        {analysisResult
          .filter((r) => r.compound_score_sentiment === 'Positive')
          .map((r, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{r.sentiment.polarity}</td>
              <td>{r.sentiment.subjectivity}</td>
              <td>{r.compound_score}</td>
              <td>{r.compound_score_sentiment}</td>
              <td>{r.text}</td>
              <td>{r.user}</td>
              <td>{r.timestamp}</td>
              <td>{r.emotion}</td>
            </tr>
          ))}
      </tbody>
    </table>
    );
  };

  return (
    <div>
      <div className='container11'>
        <h1 className='sdaasd'>Detecting and Monitoring Hate Content</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <div>
              <h2 className='x'>About</h2>
              {/* ... (existing about section) */}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h2 className='x'>Text Analysis</h2>
            <textarea
              placeholder="Enter text for analysis..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter number..."
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
            />
            <select
              name="emotion"
              id="dropdown"
              value={selectedEmotion}
              onChange={(e) => setSelectedEmotion(e.target.value)}
            >
              <option value="all">All</option>
              <option value="neg">Negative</option>
              <option value="neu">Neutral</option>
              <option value="pos">Positive</option>
            </select>
            <button onClick={handleTextAnalysis}>Analyse Text</button>
          </div>
        </div>
        {renderTable()}
      </div>
    </div>
  );
};


export default Twet;