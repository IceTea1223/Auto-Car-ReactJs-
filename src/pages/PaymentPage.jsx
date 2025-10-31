import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CarData from "../data/carData";

function PaymentPage() {
  const { id } = useParams();
  const car = CarData.find((c) => c.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment successful for ${car.name}!\nThank you ${formData.name}`);
  };

  if (!car)
    return (
      <div className="container py-5 text-center">
        <h2>Car not found!</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Back Home
        </Link>
      </div>
    );

  return (
    <div className="container py-5 font-text">
      <h2 className="mb-4 text-center fw-bold">Payment for {car.brand} {car.name}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handlePayment} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  className="form-control"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  className="form-control"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Pay ${car.price.replace("$", "")}
            </button>
          </form>

          <div className="text-center mt-3">
            <Link to={`/cars/${car.id}`} className="btn btn-outline-secondary">
              Back to Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
