import React from 'react';
import '../App.css';
import '../Props.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../components/Header'
// import HomePage from '../src/components/Home'
import Footer from './Footer'
// import Signin from './components/Signin'
// import Sell from './components/sell'
import "../ui/font-awesome-4.7.0/css/font-awesome.min.css"


class Sell extends React.Component {
  render() {
    const cat = [
      { id: 1, label: "Mobile Phones", icon: "fa fa-mobile caticons", subCat:"Tablets" },
      { id: 2, label: "Car", icon: "fa fa-taxi fa-4" , subCat:"Truck" },
      { id: 3, label: "Motorcycle", icon: "fa fa-motorcycle caticons" ,subCat:"CD-70" },
      { id: 4, label: "Houses", icon: "fa fa-home caticons",subCat:"Plot" },
      { id: 5, label: "Tv-Videos-Audio", icon: "fa fa-laptop caticons",subCat:"LED"},
      { id: 6, label: "Tablets", icon: "fa fa-mobile caticons",subCat:"Ipads" },
      { id: 7, label: "Land & Plots", icon: "fa fa-home caticons",subCat:"Gulshan" },
    ]

    return (
      <>
        <div className="header flex">
          <div className="logo">
            <Link to="/" className="pointer"> <img src={require("../ui/icons/arrow.png")} style={{ width: "25px" }} alt="icon" /> </Link>
            <Link to="/" className="pointer"><img src={require("../ui/img/logo.png")} alt="icon" /></Link>
          </div>
        </div>
        <section className="post">
          <div className="heading-post"><h1 className="flex hea-1">POST YOUR AD</h1></div>
          <div className="post-ad-area">
            <h4>CHOOSE A CATEGORY</h4>
            <ul>
              {
                cat.map(item => {
                  return (
                    <li key={item.id}
                      onClick={(e) => {
                        var ul = document.getElementById("s-b")
                        var vi = ul.classList.add("click")
                        console.log(ul)
                      }} > <Link to={"/browser/" + item.id} className="noul noulh bl color font s15 cats" ><i class={item.icon} aria-hidden="true" />{item.label}<img className="icon-search cat-img" src={require("../ui/icons/chevron-down.svg")} alt="icon" /> </Link>
                      <ul className="side-bar" id="s-b">
                        <li>{ item.subCat }</li>
                      </ul>
                    </li>
                  )
                })
              }

            </ul>
          </div>
          <div>

          </div>
        </section>
        <Footer />
        {/* <div className="footerb flex">
          <h2 className="cfff font s14">Other Countries India - South Africa - Indonesia</h2>
          <h2 className="r cfff font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
        </div> */}
      </>
    );
  }
}

export default Sell;
