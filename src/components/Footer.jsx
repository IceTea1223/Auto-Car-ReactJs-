import React from "react";
import '../assets/css/Footer.css'
function Footer() {
  return (
    <footer className="bg-black text-white pt-5 font-text">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="font-logo mb-3">
              Auto<span className="text-primary">Car</span>
            </h5>
            <p className=" small">
              Your trusted platform to find, compare, and buy your dream car.
            </p>
            <p className="small mb-1"><strong>Address:</strong> 123 AutoCar St, Phnom Penh</p>
            <p className="small mb-1"><strong>Phone:</strong> +855 96 338 1213</p>
            <p className="small mb-0"><strong>Email:</strong> info@autocar.com</p>
          </div>

          {/*  Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/cars" className="footer-link">Cars</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/*  Popular Brands */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Popular Brands</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-2">
              <li><span className="badge bg-primary">Tesla</span></li>
              <li><span className="badge bg-primary">BMW</span></li>
              <li><span className="badge bg-primary">Audi</span></li>
              <li><span className="badge bg-primary">Mercedes</span></li>
              <li><span className="badge bg-primary">Ferrari</span></li>
            </ul>
          </div>

          {/*  Social + Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <h6 className="mb-2">Subscribe to Newsletter</h6>
            <div className="input-group">
              <input type="email" className="form-control form-control-sm" placeholder="Email address" />
              <button className="btn btn-primary btn-sm">Subscribe</button>
            </div>
          </div>

        </div>

        <hr className="bg-secondary" />

        <div className="text-center small text-muted py-3">
          &copy; {new Date().getFullYear()} AutoCar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
