import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaMediumM, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import './footer.css'

import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Nepal</p>
            </div>
          </div>
          <div className='phone'>
            <h4> <FaPhoneAlt size={20} style={{ color: "#fff", marginRight: "2rem" }} />1-22323-343-23</h4>
          </div>
          <div className='email'>
            <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> info@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About The Company</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
            <FaYoutube size={30} style={{ color: "white", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
            <FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
            <FaLinkedinIn size={30} style={{ color: "white", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer 