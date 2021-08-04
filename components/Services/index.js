import React ,{Component} from 'react'; 
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import    parallax from './parallax-3.jpg'
import fish from './fish.png';
import truck from './truck.png';
import clock from './alarm-clock.png';
import afford from './affordable.png';


class Services extends Component{
    render(){
        return (<section className="services">
       
        <div className="services-background">
            <img src={parallax } alt="background-img"></img>
        </div> 
        <div className="services-overlay  ">
        <div className="container boxes"> 
            <div className="row ">
                 <div className=" col-lg-3 article">
                 <article class="box-icon">
                  <div class="box-icon-header">
                    <div class="box-icon-icon ">
                      <img src={fish}alt="fish"></img>
                    </div>
                  </div>
                  <h4 class="box-icon-title"><a >quality products</a></h4>
                  <p class="box-icon-text">We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.</p>
                </article>
                 </div>
                 <div className=" col-lg-3 article">
                 <article class="box-icon">
                  <div class="box-icon-header">
                    <div class="box-icon-icon ">
                       <img src={afford} alt="dollarsign img" ></img>
                    </div>
                  </div>
                  <h4 class="box-icon-title"><a >Affordable prices</a></h4>
                  <p class="box-icon-text">Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need.</p>
                </article>
                 </div>
                 <div className=" col-lg-3 article">
                 <article class="box-icon">
                  <div class="box-icon-header">
                    <div class="box-icon-icon ">
                    <img src={truck} alt="shooping truck" ></img>
                    </div>
                  </div>
                  <h4 class="box-icon-title"><a >Fast shipping</a></h4>
                  <p class="box-icon-text">Our store offers fast worldwide shipping to all customers regardless of what and how much you order.</p>
                </article>
                 </div>
                 <div className=" col-lg-3 article">
                 <article class="box-icon">
                  <div class="box-icon-header">
                    <div class="box-icon-icon ">
                    <img src={clock} alt="clock" ></img>
                    </div>
                  </div>
                  <h4 class="box-icon-title"><a >open 24/7</a></h4>
                  <p class="box-icon-text">Unlike other grocery shops, we are ready to serve you 24/7 and offer the best selection of groceries.</p>
                </article>
                 </div>
            </div>
        </div>
        </div>
        </section>
        )
    }
}
export default Services;