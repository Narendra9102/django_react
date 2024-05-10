import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NewBar from '../components/NewBar';
import './Buying.css'; 

const ProductsBuying = () => {
    const { id } = useParams();
    const [product, setproduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentMode, setPaymentMode] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`);
                setproduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleConfirmOrder = () => {
        
    };

    return (
        <div>
            <div className="head">
                <NewBar />
            </div>
            <div className="buying-container">
                <h2 className="section-heading">Confirm Your Order</h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="buying-card">
                        <img src={product.image} alt={product.name} className="buying-image" />
                        <div className="buying-details">
                            <h3 className="buying-name">{product.name}</h3>
                            <p className="buying-price">&#8377; {product.price}</p>
                        </div>
                    </div>
                )}
                <div className="delivery-details">
                    <h3>Delivery Address</h3>
                    <input
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Enter your delivery address"
                    />
                </div>
                <div className="payment-details">
                    <h3>Select Payment Mode</h3>
                    <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                        <option value="">Select payment mode</option>
                        <option value="credit_card">Credit Card</option>
                        <option value="debit_card">Debit Card</option>
                        <option value="net_banking">Net Banking</option>
                        <option value="cash_on_delivery">Cash on Delivery</option>
                    </select>
                </div>
                <button className="confirm-order-button" onClick={handleConfirmOrder}>Confirm Order</button>
            </div>
        </div>
    );
};

export default ProductsBuying;
