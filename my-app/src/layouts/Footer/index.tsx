import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {
  return (  
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Phần thông tin liên hệ */}
        <div className={styles.footer__section}>
          <h4 className={styles.footer__title}>Contact Us</h4>
          <p>Movie Booking Inc.</p>
          <p>Email: support@moviebooking.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Cinema Lane, Hollywood, CA</p>
        </div>

        {/* Phần liên kết nhanh */}
        <div className={styles.footer__section}>
          <h4 className={styles.footer__title}>Quick Links</h4>
          <ul className={styles.footer__links}>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/cinemas">Cinemas</Link>
            </li>
            <li>
              <Link to="/showtimes">Showtimes</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Phần mạng xã hội */}
        <div className={styles.footer__section}>
          <h4 className={styles.footer__title}>Follow Us</h4>
          <div className={styles.footer__socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className={styles.footer__copyright}>
        <p>© {new Date().getFullYear()} Movie Booking. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
