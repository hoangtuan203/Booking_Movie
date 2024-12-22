import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Đảm bảo đường dẫn chính xác
import logo from "../../assets/images/logo.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img
              src={logo}
              alt="Movie Booking Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/movies">Movies</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/cinemas">Cinemas</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/showtimes">Showtimes</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search movies, cinemas..."
            className={styles.searchInput}
          />
          <button type="button" className={styles.searchBtn}>
            Search
          </button>
        </div>

        {/* User Actions */}
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnLogin}`}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnSignup}`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
