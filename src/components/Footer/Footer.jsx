import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Victor Iliya</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://linkedin.com/in/victor-iliya/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/VSI12" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://instagram.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className ='bx bxl-twitter'></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Victor Iliya. All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer