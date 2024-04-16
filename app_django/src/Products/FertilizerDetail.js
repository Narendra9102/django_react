import React from 'react';
import { useParams } from 'react-router-dom';

const FertilizerDetail = () => {
  const { id } = useParams(); 


  return (
    <div>
      <h2>Fertilizer Detail</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default FertilizerDetail;
