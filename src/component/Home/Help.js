import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Help/Support</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-header text-center">
              <h2>We'd Love to Hear From You!</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              <small>We'll get back to you soon!</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
