/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { Component } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from  './logo.png';
import banner from './banner1.jpg';



 
class Navbar extends Component{
    render(){
        return (
        <nav className="navbar navbar-expand-lg "> 
 <div className="container" >
<a className="navbar-brand" >
  <img src= {logo}  alt="logo -img"/>
</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
  <span ></span>
  <span ></span>
  <span ></span>


<div className="collapse navbar-collapse " id="navbarSupportedContent">

  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link"  >Home </a>
      

    </li>
    <li className="nav-item">
      <a className="nav-link" >pages  </a>
      <div className="dropdown-list">
        <ul>
          <li className="list-item"><a className="list-link" >About Us</a></li>
          <li className="list-item"><a className="list-link" >What We Offer</a></li>
          <li className="list-item"><a className="list-link" >Our Team</a></li>
          <li className="list-item"><a className="list-link" >Testimonials</a></li>
          <li className="list-item"><a className="list-link" >Pricing List</a></li>
        </ul>
      </div>
    </li>
    <li className="nav-item ">
      <a className="nav-link" >blog <i className="fas fa-chevron-down d-block d-lg-none"></i></a>
     <div className="dropdown-list">
      <ul >
        <li className="list-item"><a className="list-link" >Grid Blog</a></li>
        <li className="list-item"><a className="list-link" >Blog List</a></li>
        <li className="list-item"><a className="list-link" >Blog Post</a></li>
      </ul>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" >gallery <i className="fas fa-chevron-down d-block d-lg-none"></i></a>
      <div className="dropdown-list">
        <ul>
        <li className="list-item"><a className="list-link" >Grid Gallery</a></li>
        <li className="list-item"><a className="list-link" >Grid Fullwidth Gallery</a></li>
        <li className="list-item"><a className="list-link" >Masonry Gallery</a></li>
        <li className="list-item"><a className="list-link" >Masonry Fullwidth Gallery</a></li>
      </ul>
      </div>
    </li>
    <li className="nav-item drop-item">
      <a className="nav-link" >elements <i className="fas fa-chevron-down d-block d-lg-none"></i> </a>
      <div className="dropdown-list drop-plus">
      <div className="row">
        <div className="col-lg-5">
          <h3 className="nav-title"> <i className="fas fa-th"></i>Elements</h3>
          
            <div className="row">
                          <div className="col-lg-6">
                          <ul>
                          <li className="list-item"><a className="list-link" >Typography</a></li>
                          <li className="list-item"><a className="list-link" >Icon lists</a></li>
                          <li className="list-item"><a className="list-link" >Progress bars</a></li>
                          <li className="list-item"><a className="list-link" >Calls to action</a></li>
                          <li className="list-item"><a className="list-link" >Tabs &amp; accordions</a></li>
                        </ul>
                        </div>

                           <div className="col-lg-6">
                          <ul>
                          <li className="list-item"><a className="list-link" >Buttons</a></li>
                          <li className="list-item"><a className="list-link" >Tables</a></li>
                          <li className="list-item"><a className="list-link" >Forms</a></li>
                          <li className="list-item"><a className="list-link" >Counters</a></li>
                          <li className="list-item"><a className="list-link" >Grid system</a></li>
                        </ul>
                      </div>
          </div>
        </div>
        <div className="col-lg-3">
          <h3 className="nav-title"><i className="fas fa-layer-group"></i>ADDITIONAL PAGES</h3>
           <ul>
            <li className="list-item"><a className="list-link" >404 Page</a></li>
            <li className="list-item"><a className="list-link" >Coming Soon</a></li>
            <li className="list-item"><a className="list-link" >Contact Us</a></li>
            <li className="list-item"><a className="list-link" >Privacy Policy</a></li>
           </ul>
         
        </div>

        <div className="col-lg-3">
          <h3 className="nav-title"><i className="fas fa-carrot"></i>WELCOME TO OUR STORE</h3>
          <a  className="img-link">   <img src={banner} alt=" banner-photo"/></a>

        </div>
      </div>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" >shop <i className="fas fa-chevron-down d-block d-lg-none"></i></a>
      <div className="dropdown-list">
        <ul>
      <li className="list-item"><a className="list-link" >Ecwid Shop</a></li>
      <li className="list-item"><a className="list-link" >Grid Shop</a></li>
      <li className="list-item"><a className="list-link" >Shop List</a></li>
      <li className="list-item"><a className="list-link" >Single Product</a></li>
      <li className="list-item"><a className="list-link" >Cart Page</a></li>
      <li className="list-item"><a className="list-link" >Checkout</a></li>
    </ul>
    </div>
    </li> 
  </ul>
  
</div>
<div className="icon-nav">
<FontAwesomeIcon  className= "i" icon="search" />
 <FontAwesomeIcon  className= "i" icon="shopping-cart" /> 
  <i className="icon-toggle">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </i>

</div>
</div>
</nav>
        )

    
}} ;

export default Navbar;