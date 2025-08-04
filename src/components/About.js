import React from 'react';

const About = () => (
  <section id="about" className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="lead text-center">
        We are a non-profit organization committed to empowering underprivileged communities.
      </p>
      <div className="row mt-4">
        <div className="col-md-4">
          <h4>Our Mission</h4>
          <p>To uplift lives by providing access to essential services and opportunities.</p>
        </div>
        <div className="col-md-4">
          <h4>Our Vision</h4>
          <p>A world where every person has the right to live with dignity and hope.</p>
        </div>
        <div className="col-md-4">
          <h4>Our Work</h4>
          <p>We work with local communities to implement sustainable solutions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
