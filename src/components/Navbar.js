import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container">
      <a className="navbar-brand" href="#">HopeRise NGO</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#volunteer">Volunteer</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
