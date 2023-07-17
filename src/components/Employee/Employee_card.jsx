import React from 'react';
import user_img from './download.png';
import "./Employee_card.css"
const Employee_card = (props) => {
  return (
    <div>
      <div className="user_img">
        <div className="card">
          <img src={user_img} alt="John" style={{ width: '100%', height: '147px' }} />
          <h1 style={{ fontSize: '1.6rem', marginBottom: '8px'  }}>
            {props.username}
          </h1>

          <p className="title">{props.position}</p>
          {/* <p>Useful Info</p> */}
        </div>
      </div>
    </div>
  );
};

export default Employee_card;
