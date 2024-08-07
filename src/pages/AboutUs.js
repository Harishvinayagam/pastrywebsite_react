import React from 'react';
import team from '../assets/team.jpg';
import './AboutUs.css'; // Import custom CSS for additional styles

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="text-center mb-4">About Us</h1>
        <p className="text-center mb-4">At Sweet Delights, we are passionate about creating mouth-watering desserts that bring joy to every bite. Our team of skilled bakers and confectioners are dedicated to using only the finest ingredients to craft delightful treats for all occasions.</p>
        <img src={team} className="img-fluid about-us-image" alt="Our Team" />
        <h2 className="mt-5">Our Story</h2>
        <p>Started in 2010, Sweet Delights has grown from a small neighborhood bakery to a renowned dessert shop known for its quality and taste. Our commitment to excellence has earned us a loyal customer base and numerous accolades.</p>
      </div>
    </div>
  );
}

export default AboutUs;
