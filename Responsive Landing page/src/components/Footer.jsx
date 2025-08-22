import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Nike, Inc. All Rights Reserved.</p>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
          <div className="socials">
            <a href="#">Instagram</a> |<a href="#">Twitter</a> |
            <a href="#">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
