import React from 'react'
import { useParams } from 'react-router-dom';

export default function SellerProfile() {
    const { id } = useParams();
  return (
    <div>
        <h2>Seller Detail</h2>
      <p>Seller ID: {id}</p>
    </div>
  )
}
