import React from 'react'
import { useParams } from 'react-router-dom';

export default function BuyerProfile() {
    const { id } = useParams();
  return (
    <div>
        <h2>Buyer Detail</h2>
      <p>Buyer ID: {id}</p>
    </div>
  )
}
