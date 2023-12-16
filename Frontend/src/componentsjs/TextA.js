import React, { useState } from 'react';
import './TextA.css';
import axios from 'axios'; 
import { Navigationn1 } from '../components/navigation1';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import text from '../images/text.gif';
const TextA = () => {
  const [inputText, setInputText] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // const [analysisResult, setAnalysisResult] = useState('');
  const [analysisResult, setAnalysisResult] = useState({
    text: '',
    isHate: '',
    sentiment: {
      compound: 0,
      neg: 0,
      neu: 0,
      pos: 0,
    },
    type: '',
    emotionResult: {},
    file: '',
  });
  Chart.register(ArcElement); 
  const handleTextAnalysis = async () => {
    try {
      // Make a POST request to your Flask server
      const response = await axios.post('http://127.0.0.1:5000/analyze-text', {
        text: inputText,
      });
      console.log(response);
      const result = response.data;

      // Set the analysis result based on the response from the server
      setIsButtonClicked(true);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error while making the request:', error);
      // Handle errors here
    }
    // setAnalysisResult('This is a dummy analysis result.');
  };
  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  }
 
    const prepareSentimentChartData = () => {
      const { sentiment } = analysisResult;
      const labels = ['Negative', 'Neutral', 'Positive'];
      const colors = ['#FF6384', '#36A2EB', '#FFCE56'];
  
      const data = [sentiment.neg, sentiment.neu, sentiment.pos];
  
      return {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
      };
    };

  const sentimentOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value.toFixed(2)}%`;
          },
          title: () => {
            return ''; // Clear title to avoid duplication
          },
        },
        position: 'nearest',
        intersect: false,
      },
      datalabels: {
        formatter: (value, context) => {
          return `${value.toFixed(2)}%`;
        },
        color: '#fff', // Set the color of the text
        display: true,
      },
    },
  };

  return (
    <div className='vc'>
        <Navigationn1/>
        <div  className='container11'>
    
        <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <div>
          <h2 className='x'>Text Analysis</h2>
          <ul className="list-container">
          <li className="list-item">
            <p>
Text analysis employs computational methods to extract meaningful insights and patterns from written content, facilitating tasks such as sentiment analysis and information extraction.</p>
          </li>
          <li className="list-item">
            <p>It analyzes the input and predicts the sentiment or emotion in the content.</p>
          </li>
          <li>
            <div className='text'>
          <img src={text} alt="Description" className='xd' />
          </div>
          </li>
        </ul>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h2 className='x'></h2>
        <textarea
          placeholder="Enter text for analysis..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <button style={buttonStyle} onClick={handleTextAnalysis}>
      Analyse Text
    </button>
        {isButtonClicked && analysisResult &&(
  <div>
    <div className='moovv'>
    <h3>Analysis Result:</h3>
    <p>Text: {analysisResult.text}</p>
    <p>Is Hate: {analysisResult.isHate}</p>
    </div>
    {/* <p>Sentiment:</p> */}
    {/* <ul>
      <li>Compound: {analysisResult.sentiment.compound}</li>
      <li>Negative: {analysisResult.sentiment.neg}</li>
      <li>Neutral: {analysisResult.sentiment.neu}</li>
      <li>Positive: {analysisResult.sentiment.pos}</li>
    </ul> */}
    {/* <p>Type: {analysisResult.type}</p> */}
    {/* <p>Emotion Result:</p>
    <ul>
      {Object.keys(analysisResult.emotionResult).map((key) => (
        <li key={key}>
          {key}: {analysisResult.emotionResult[key]}
        </li>
      ))}
    </ul> */}
    {/* <p>File: {analysisResult.file}</p> */}
    {/* Add similar lines for other properties */}
    <div className='movv'>
    <div>
    {analysisResult && (
              <div>
                <div>
                  {analysisResult.sentiment && (
                    <div>
                      <h3>Sentiment Analysis:</h3>
                      <div className='pie-chart-container'>
                      <Doughnut
  data={prepareSentimentChartData()}
  options={sentimentOptions}
  plugins={[ChartDataLabels]}
/>

                      </div>
                      <div className='legend'>
                        <div className='legend-item'>
                          <span className='legend-color negative'></span>
                          Negative
                        </div>
                        <div className='legend-item'>
                          <span className='legend-color neutral'></span>
                          Neutral
                        </div>
                        <div className='legend-item'>
                          <span className='legend-color positive'></span>
                          Positive
                        </div>
                      </div>
                    </div>
                  )}
        
                
                      </div>
                  
                  </div>
                )}
    </div>
    </div>
  </div>
  
)}

      </div>
    </div>
    </div>
    </div>
  );
};

export default TextA;
