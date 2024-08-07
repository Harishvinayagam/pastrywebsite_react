import React from 'react';
import cakeService from '../assets/cakeService.jpeg';
import pastryService from '../assets/pastryService.jpg';
import iceCreamService from '../assets/iceCreamService.jpeg';
import './Services.css'; // Import custom CSS for additional styles

function Services() {
  return (
    <div className="services-container">
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card service-card">
            <img src={cakeService} className="card-img-top" alt="Cake Service" />
            <div className="card-body">
              <h5 className="card-title">Custom Cakes</h5>
              <p className="card-text">Order custom cakes for weddings, birthdays, and other special occasions. Our team will work with you to create the perfect cake that meets your needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card service-card">
            <img src={pastryService} className="card-img-top" alt="Pastry Service" />
            <div className="card-body">
              <h5 className="card-title">Pastry Catering</h5>
              <p className="card-text">We offer pastry catering services for events of all sizes. From mini pastries to full dessert spreads, we have everything you need to make your event sweet and memorable.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card service-card">
            <img src={iceCreamService} className="card-img-top" alt="Ice Cream Service" />
            <div className="card-body">
              <h5 className="card-title">Ice Cream Parlor</h5>
              <p className="card-text">Visit our ice cream parlor to enjoy a variety of flavors made from the freshest ingredients. Perfect for a hot day or a sweet treat anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
