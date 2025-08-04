import React from 'react';

const VolunteerForm = () => (
  <section id="volunteer" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Volunteer With Us</h2>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="col-12">
          <label htmlFor="skills" className="form-label">Tell us about your skills</label>
          <textarea className="form-control" id="skills" rows="3" required></textarea>
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-success" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </section>
);

export default VolunteerForm;
