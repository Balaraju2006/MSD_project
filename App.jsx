import React from "react";
import "./index.css";

export default function App() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="logo">🎬 MyMovie</div>
          <nav>
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#movie-section">Movies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Showtimes</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1>Experience the Magic of Cinema</h1>
          <p>Book your tickets now and get ready for a cinematic adventure!</p>
          <a href="#movie-section" className="cta-button">Book Now</a>
        </div>
      </main>

      {/* Movies Section */}
      <section className="movie-section" id="movie-section">
        <h2>Now Showing</h2>
        <div className="movie-grid">
          <div className="movie-card">
            <img src="/d.jpg" alt="Poster of Devara" />
            <h3>Devara</h3>
            <div className="showtimes">
              <a href="#" className="showtime-btn">10:00 AM</a>
              <a href="#" className="showtime-btn">2:30 PM</a>
              <a href="#" className="showtime-btn">7:00 PM</a>
            </div>
          </div>

          <div className="movie-card">
            <img src="/j.jpg" alt="Poster of Jersey" />
            <h3>Jersey</h3>
            <div className="showtimes">
              <a href="#" className="showtime-btn">11:30 AM</a>
              <a href="#" className="showtime-btn">4:00 PM</a>
              <a href="#" className="showtime-btn">9:30 PM</a>
            </div>
          </div>

          <div className="movie-card">
            <img src="/de.jpg" alt="Poster of Dear Comrade" />
            <h3>Dear Comrade</h3>
            <div className="showtimes">
              <a href="#" className="showtime-btn">1:00 PM</a>
              <a href="#" className="showtime-btn">5:45 PM</a>
              <a href="#" className="showtime-btn">10:00 PM</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>&copy; 2025 MyMovie. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}
