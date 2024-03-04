import React from 'react';
import { useNavigate } from "react-router-dom";
import NewBar from './NewBar';
import './BuySell.css'; 

const BuySell = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; 
  };

  const handleButton1Click = () => {
    navigate("/customer/buysell/buyer")
  };

  const handleButton2Click = () => {
    navigate("/customer/buysell/seller")
  };

  return (
    <div className='page'>
      <NewBar handleLogout={handleLogout} />
      <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Buy/Sell Page</h1><br/><br/><br/>

      <div className='customer'>
        <div className='pro'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZ0zuQZsjGfi5NAssB-mMIOeXGuyY55DfRD_Hc1a4C1Qj6zopLwgVbZWtinClfzgxZH0&usqp=CAU' alt='Buyer' className='img'></img><br />
          <button className='button' onClick={handleButton1Click}>Click Me</button>
        </div>
        <div className='pro'>
          <img src='https://previews.123rf.com/images/sarahdesign/sarahdesign1410/sarahdesign141003083/32958813-sell-icon.jpg' alt='sell' className='img'></img><br />
          <button className='button' onClick={handleButton2Click}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
