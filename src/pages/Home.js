import React from 'react';
import { Link } from 'react-router-dom';
import dessert1 from '../assets/dessert1.jpg';
import dessert2 from '../assets/dessert2.jpg';
import dessert3 from '../assets/dessert3.jpg';
import './home.css'; // Import custom CSS for additional styles

function Home() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="hero-section text-center mb-5 p-5 rounded">
        <h1 className="display-4">Welcome to Sweet Delights!</h1>
        <p className="lead">Your go-to place for heavenly desserts and sweet treats!</p>
        <Link to="/services" className="btn btn-primary btn-lg">Explore Our Services</Link>
      </div>
      {/* Cards Section */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <img src={dessert1} className="card-img-top" alt="Delicious Cake" />
            <div className="card-body">
              <h5 className="card-title">Delicious Cakes</h5>
              <p className="card-text">Indulge in our wide variety of freshly baked cakes, perfect for any occasion.</p>
              <Link to="/services" className="btn btn-outline-primary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <img src={dessert2} className="card-img-top" alt="Scrumptious Pastries" />
            <div className="card-body">
              <h5 className="card-title">Scrumptious Pastries</h5>
              <p className="card-text">Enjoy our delectable pastries, made with the finest ingredients.</p>
              <Link to="/services" className="btn btn-outline-success">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <img src={dessert3} className="card-img-top" alt="Heavenly Ice Creams" />
            <div className="card-body">
              <h5 className="card-title">Heavenly Ice Creams</h5>
              <p className="card-text">Cool down with our creamy and flavorful ice creams, available in various flavors.</p>
              <Link to="/services" className="btn btn-outline-warning">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
