import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"



  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column className="md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/company'>Company</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </Column>
          <Column className="md=4">
            <div></div>
          </Column>
          <Column className="md-4">
            <div class="socialContainer">
                <h3>Social Follow</h3>
                <a href="https://www.youtube.com/"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};


// function Footer(props) {
//     return (
//         <footer className="site-footer">
//             <div className="container">
//                 <div className="row">             
//                     <div className="col-4 col-sm-2 offset-1">
//                         <h5>Links</h5>
//                         <ul className="list-unstyled">
//                             <li><Link to='/'>Home</Link></li>
//                             <li><Link to='/services'>Services</Link></li>
//                             <li><Link to='/company'>Company</Link></li>
//                             <li><Link to='/contact'>Contact Us</Link></li>
//                         </ul>
//                     </div>
//                     <div className="col-6 col-sm-3 text-center">
//                         <h5>Social</h5>
//                         <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
//                         <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
//                         <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
//                         <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
//                     </div>
//                     <div className="col-sm-4 text-center">
//                         <a role="button" className="btn btn-link" href="tel:+14065555309"><i className="fa fa-phone" /> 1-406-555-5309</a><br />
//                         <a role="button" className="btn btn-link" href="mailto:rrtech@rrtech.com"><i className="fa fa-envelope-o" /> rrtech@rrtech.com</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

export default Footer;