import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function CheckoutForm() {
  const location = useLocation();

  // Extract product name and price from query parameters
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('name');
  const productPrice = queryParams.get('price');

  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDateMM, setExpiryDateMM] = useState('');
  const [expiryDateYY, setExpiryDateYY] = useState('');
  const [cvn, setCvn] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!/^\d{16}$/.test(cardNumber)) {
      isValid = false;
      errors.cardNumber = 'Card Number should be 16 digits';
    }
    if (cardholderName.trim() === '') {
      isValid = false;
      errors.cardholderName = 'Cardholder name is required';
    }
    const expiryDate = expiryDateMM + expiryDateYY;
    if (!/^\d{4}$/.test(expiryDate) || parseInt(expiryDateMM) > 12) {
      isValid = false;
      errors.expiryDate = 'Invalid expiry date';
    }
    if (!/^\d{3,4}$/.test(cvn)) {
      isValid = false;
      errors.cvn = 'CVN should be 3 or 4 digits';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      alert('Please correct the errors.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/checkout', {
        productName,
        productPrice,
        cardNumber,
        cardholderName,
        expiryMonth: expiryDateMM,
        expiryYear: expiryDateYY,
        cvn
      });

      alert(`Payment Success: ${response.data.message}`);
    } catch (error) {
      console.error(error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>

      <div className="text-center mb-4">
        <h3>Product: {productName}</h3>
        <h4>Price: ${productPrice}</h4>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Card Number */}
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="tel"
            id="cardNumber"
            className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <div className="invalid-feedback">{errors.cardNumber}</div>
        </div>

        {/* Cardholder Name */}
        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            className={`form-control ${errors.cardholderName ? 'is-invalid' : ''}`}
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
          <div className="invalid-feedback">{errors.cardholderName}</div>
        </div>

        {/* Expiry Date */}
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="expiryDateMM">Expiry Date (MM)</label>
            <input
              type="tel"
              id="expiryDateMM"
              className={`form-control ${errors.expiryDate ? 'is-invalid' : ''}`}
              value={expiryDateMM}
              onChange={(e) => setExpiryDateMM(e.target.value)}
              maxLength="2"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="expiryDateYY">Expiry Date (YY)</label>
            <input
              type="tel"
              id="expiryDateYY"
              className={`form-control ${errors.expiryDate ? 'is-invalid' : ''}`}
              value={expiryDateYY}
              onChange={(e) => setExpiryDateYY(e.target.value)}
              maxLength="2"
              required
            />
          </div>
        </div>
        <div className="invalid-feedback">{errors.expiryDate}</div>

        {/* CVN */}
        <div className="form-group">
          <label htmlFor="cvn">Security Code (CVN)</label>
          <input
            type="tel"
            id="cvn"
            className={`form-control ${errors.cvn ? 'is-invalid' : ''}`}
            value={cvn}
            onChange={(e) => setCvn(e.target.value)}
            maxLength="4"
            required
          />
          <div className="invalid-feedback">{errors.cvn}</div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
