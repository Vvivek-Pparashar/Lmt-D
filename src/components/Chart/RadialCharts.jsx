import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RadialCharts = () => {
  // Get the present and absent percentages from somewhere (e.g., API or user input)
  const presentPercentage = 70;
  const absentPercentage = 30;

  return (
    <div className='chart-wrap' style={{display:"flex"  }}>
      <div className="chart-container">
        <CircularProgressbar
          value={presentPercentage}
          text={`${presentPercentage}%`}
          styles={buildStyles({
            textColor: '#555',
            pathColor: 'green',
            trailColor: '#eee',
          })}
        />
        <div className="chart-label">Present</div>
      </div>

      <div className="chart-container">
        <CircularProgressbar
          value={absentPercentage}
          text={`${absentPercentage}%`}
          styles={buildStyles({
            textColor: '#555',
            pathColor: 'red',
            trailColor: '#eee',
          })}
        />
        <div className="chart-label">Absent</div>
      </div>
    </div>
  );
};

export default RadialCharts;
