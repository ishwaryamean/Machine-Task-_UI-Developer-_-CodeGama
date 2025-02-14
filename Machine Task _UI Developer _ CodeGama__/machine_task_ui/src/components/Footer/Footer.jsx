import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer"
    
    >
      <div className="footer-content">
        <div className="footer-left">
          <h2>Manage your sales and analytics at one place</h2>

          <img className="arrow-icon" src="/assets/images/arrow.png" alt="arrow" />
          <p className="footer-subtext">
            Empowering Your Projects, Enhancing Your Success, Every Step of the Way.
          </p>

          <div className="extra-icons">
            <img src="/assets/images/LIND-MEDIA.png" alt="LIND Media" />
            <img src="/assets/images/X-MEDIA.png" alt="X Media" />
            <img src="/assets/images/LIND-MEDIA.png" alt="LIND Media" />
          </div>

          <h4>Download our App</h4>
          <div className="store-buttons">
            <img
              src="/assets/images/play-store.png"
              alt="Get it on Google Play"
            />
            <img
              src="/assets/images/app-store.png"
              alt="Download on the App Store"
            />
          </div>
        </div>

        <div className="footer-right">
          <img
            src="/assets/images/footer-img.png"
            alt="Neon Green"
            className="green-neon"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <span>© ropflow.in</span>
        <a href="#" className="privacy-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
