import React from 'react'

const Header = () => (
  <header>
    <nav className="page-nav">
      <h1 className="brand">
        <a href="/">
          <img src="/img/oncoming-logo.svg" alt="Oncoming Productions" />
        </a>
      </h1>

      <ul className="social-list">
        <li className="social-item">
          <a href="mailto:oncomingpro@gmail.com">
            <img src="/img/social/email.svg" alt="Email" />
          </a>
        </li>

        <li className="social-item">
          <a href="https://www.instagram.com/oncomingproductions">
            <img src="/img/social/instagram.svg" alt="Instagram" />
          </a>
        </li>

        <li className="social-item">
          <a href="https://www.facebook.com/oncomingpro/">
            <img src="/img/social/facebook.svg" alt="Facebook" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
