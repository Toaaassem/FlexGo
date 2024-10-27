import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './style.css';  

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    plan: 'Premium',
    paymentMethod: 'Visa'
  });

  const navigate = useNavigate();  // Hook to navigate back to previous page

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscription submitted! \nName: ${formData.fullName}\nEmail: ${formData.email}\nPlan: ${formData.plan}\nPayment Method: ${formData.paymentMethod}`);
  };

  const handleClose = () => {
    navigate(-1);  // Go back to the previous route (the page with the button)
  };

  return (
    <div className="container mt-5">
      <div className="card custom-card">
        {/* X button (exit) */}
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <div className="card-header text-center">
          <h2>Select Plan</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control custom-input"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control custom-input"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="plan" className="form-label">Choose Plan</label>
              <select
                className="form-select custom-select"
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
              >
                <option value="Premium">Premium - $19.99</option>
                <option value="Cinematic">Cinematic - $39.99</option>
                <option value="Starter">Starter - Free</option>
              </select>
            </div>

            <div className="mb-3">
              <p>You can spend money from your account on the renewal of the connected packages, or to order cars on our website.</p>
            </div>

            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <div>
                <div className="form-check form-check-inline custom-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="visa"
                    name="paymentMethod"
                    value="Visa"
                    checked={formData.paymentMethod === 'Visa'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="visa">Visa</label>
                </div>
                <div className="form-check form-check-inline custom-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="mastercard"
                    name="paymentMethod"
                    value="Mastercard"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="mastercard">Mastercard</label>
                </div>
                <div className="form-check form-check-inline custom-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="Paypal"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="paypal">Paypal</label>
                </div>
              </div>
            </div>

            {/* Submit button with same design */}
            <div className="d-grid">
              <button type="submit" className="buttonn btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
