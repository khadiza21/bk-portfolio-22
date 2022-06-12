import React from 'react';
import { Slide } from "react-reveal";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5 py-5">
        <div className="socialIcon">
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram-square"></i>
        </div>
        <div>
          <Slide top>
            <h5>Terms Info Privacy</h5>
          </Slide>
          <Slide bottom>
            <h5>Support Contact Policy</h5>
          </Slide>
  
          <p className="">
            <Slide top>
              <small>© 2022 All Rights Reserved. Design By bkhadiza40</small>
            </Slide>
          </p>
        </div>
      </div>
    );
};

export default Footer;