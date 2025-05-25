import React from 'react';
import './styles/Main.css';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import mypic from './assets/images/mypic.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <div className="text">
            <p>Hello everyone!</p>
            <h1 style={{textAlign:"center", marginLeft:"15px"}}> I  am Siri</h1>
            <p>Front-end Developer & Designer</p>

            <div className="icons">
              <a href="https://www.linkedin.com/in/siriguduru/" target="_blank" rel="noopener noreferrer"><LinkedIn className="icon" /></a>
              <a href="https://www.instagram.com/siri_guduru9?igsh=NG1zdzBnejljamI1" target="_blank" rel="noopener noreferrer"><Instagram className="icon" /></a>
              <a href="https://github.com/SiriGuduru" target="_blank" rel="noopener noreferrer"><GitHub className="icon" /></a>
            </div>

           
               
         
        </div>
         </div>
            <div className="buttons">
              <Link to="/contact" ><button>Contact Me</button></Link>
              <a href="mailto:siriguduru9@gmail.com?subject=Hiring%20Inquiry"  className="hide"><button>Hire Me</button></a>
                <a href="https://github.com/SiriGuduru/my_portfolio/tree/main/public/documents/resume.pdf/" download="Siri Guduru resume"><button>Resume</button ></a>
            </div>

        <div className="main_img">
          <img src={mypic} alt="My Profile" />
        </div>
      </div>
    </div>
  );
};

export default Main;
