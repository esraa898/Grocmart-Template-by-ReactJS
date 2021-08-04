import React, {Component} from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './logo.png';
class Footer extends Component {

    render(){
        return  (
        <footer >
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 footer-classic">
                          <div className="footer-classic-brand">
                             <a className="brand" href="index.html">
                                <img  src={logo} alt="logo"></img></a>
                               </div>
                <ul className="list-schedule">
                  <li><span>Weekdays:</span><span>08:00am - 08:00pm</span></li>
                  <li><span>Weekends:</span><span>10:00am - 06:00pm</span></li>
                </ul>
                <div className="footer-classic-social">
                  <div>
                    <p>Get Social</p>
                    <div>
                      <ul className="list-social-icons">
                        
                      </ul>
                    </div>
                  </div>
                        </div>
                        </div>
            <div className="col-lg-4"> 
             <h4 className="footer-main-title">Contacts</h4>
                <ul className="contacts-creative">
                  <li>
                    <div className="unit row ">
                      <div className=" col-lg-1 unit-left">
                          <span >
                          <FontAwesomeIcon icon="map-marker" />
                          </span>
                          </div>
                      <div className=" col-lg-11 unit-body">
                          <a>523 Sylvan Ave, 5th Floor<br/>Mountain View, CA 94041 USA</a>
                          </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit row">
                      <div className=" col-lg-1 unit-left">
                          <span >
                          <FontAwesomeIcon icon="phone" />
                          </span>
                          </div>
                      <div className=" col-lg-11 unit-body">
                          <a href="tel:#">+1 (844) 123 456 78</a></div>
                    </div>
                  </li>
                  <li>
                    <div className="unit row ">
                      <div className=" col-lg-1 unit-left">
                          <span >
                          <FontAwesomeIcon icon="envelope" ></FontAwesomeIcon></span></div>
                      <div className=" col-lg-11 unit-body"><a >info@demolink.org</a></div>
                    </div>
                  </li>
                </ul>
               </div>


               <div className="col-lg-4 footer-form">
                        
                <h4 className="footer-classic-title">Newsletter</h4>
                <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
                <form  className="row">
                  <div className="  col-lg-8 form-wrap">
                    <input className="form-input"  type="email" name="email" data-constraints="@Email @Required" placeholder="Enter your e-mail"/>
                  </div>
                  <div className=" col-lg-4 form-button">
                    <div className="button-email " type="submit">
                             <a className="button-change">
                                 <span><FontAwesomeIcon icon="paper-plane"></FontAwesomeIcon></span>
                             </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
                       
        
            <div className="end-footer">
            <div className="container ">
                <div className="footer-logo">
                <div className="row">
                    <div className="col-lg-4" > 
                    <p >
                    <span>©&nbsp;</span>
                    <span class="copyright-year">2021</span>
                    <span>&nbsp;</span>
                    <span>Grocmart</span>
                    <span>.&nbsp;</span>
                    <span>All rights reserved</span>
                    </p>
                    
                    </div>
                     <div  className= "col-lg-4 ">
                    
                     <FontAwesomeIcon className="footer-icon" icon={['fab', 'cc-visa']} /> 
                     <FontAwesomeIcon  className="footer-icon"icon={['fab', 'cc-mastercard']} /> 
                     <FontAwesomeIcon  className="footer-icon"icon={['fab', 'cc-paypal']} /> 
                     
                     </div>
                     <div className= "col-lg-4">
                      <p > Privacy policy</p>
                      </div>
                      
                </div>
                </div>
        </div>
        </div>
        </footer>
        )
    }
};

export default Footer;