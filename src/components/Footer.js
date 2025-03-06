import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Brand */}
      <div class="footer-section brand">
        <h2>Dentify Clinic</h2>
        <p>Your Smile, Our Priority</p>
      </div>
      {/* Quick Links */}
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/appointment">Services</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* Contact */}
      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p>📞 +91-123-456-7890</p>
        <p>✉️ info@dentifyclinic.com</p>
        <p>📍 123 Dental St, Your City, India</p>
      </div>
      {/* Social Media */}
      <div class="footer-section social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div class="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Dentify Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
