import React ,{Component} from 'react';
import './MyApp.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faShoppingCart,faArrowRight,faMapMarker ,  faPhone , faEnvelope,faClock,faFish, faDollarSign, faTruck,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
library.add(fab, faSearch, faShoppingCart, faArrowRight,faMapMarker , faPhone , faEnvelope,faClock,faFish,faDollarSign,faTruck,faPaperPlane)
class MyApp extends Component{
  render(){
    return  (
    <div className="main-container">
      <div className="page-content">   
        <Navbar/> 
        <About/>
        <Services/>
      <Footer/>
     
    </div>
    </div> 
    )
  }
}



export default MyApp;
