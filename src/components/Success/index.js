import './SuccessPopup.css'
import React from 'react';


const SuccessPopup = (props) => {
  return (
    <div className="success-popup">
      <div className="success-content">
      <img src="/all image/7efs.gif" alt="" style={{width:"15rem"}}/>
        <h2>Successful!</h2>
        <p>{props.message}</p>
     
      </div>
    </div>
  );
};

export default SuccessPopup;