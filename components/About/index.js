import React,{ Component} from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aboutlogo from './about-576x537.jpg';
import signature from './signature-1-160x55.png'

class About extends Component{
    render(){
        return (
        <div className ="container about-main">
            <div className=" About-se" >
                <div className=" about-img  ">
            <img  src={Aboutlogo} alt="aboutimg" />
            </div>
            <div className="  about-content">
            <h4>A Few Words About Our Store</h4>
            <h2>About us</h2>
            <p>Grocmart is a family-owned grocery store that has been offering quality
                 products for your everyday life since 1999, while also providing superior
                  service and competitive prices.</p>
            <div className="about-signature">
               <a className="button-change"> 
               <span> 
            <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon>
            </span>
             </a>
                <div className="sig-names">
                <div class="team-navy-name">
                    <a>Sam Williams</a></div>
                      <div class="team-navy-status founder">
                          CEO, Founder</div>

                </div>
                <div>
                    <img src={signature} alt="signature"></img>
                </div>
            </div>
            </div>
            </div>
            </div>
            )
    }

}

export default About;