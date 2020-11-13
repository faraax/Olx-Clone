import React from 'react';
import '../Props.css';
import '../App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Footer() {
    const popCat = [
        { id: 1, label: "Car" },
        { id: 2, label: "Flat for rent" },
        { id: 3, label: "Jobs" },
        { id: 4, label: "Mobile Phones" },
    ]
    const trending = [
        { id: 1, label: "Bikes" },
        { id: 2, label: "Watches" },
        { id: 3, label: "Books" },
        { id: 4, label: "Dogs" },
    ]
    const aboutUs = [
        { id: 1, label: "About OLX Group" },
        { id: 2, label: "OLX Blog" },
        { id: 3, label: "Contact Us" },
        { id: 4, label: "OLX for Businesses" },
    ]
    const olx = [
        { id: 1, label: "Help" },
        { id: 2, label: "sitemap" },
        { id: 3, label: "Legal & Privacy information" },
    ]
    return (
        <>
        <div className="footer flex">
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color ">POPULAR CATEGORIES</h2>
                {popCat.map(item => {
                    return (
                        <Link to={"/" + item.id} className="noul noulh font s14 color" key={item.id} > {item.label} </Link>
                    )
                })
                }
            </div>
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">TRENDING SEARCHES</h2>
                {trending.map((item => {
                    return (
                        <Link to={`/ ${item.id}`} className="noul noulh font s14 color" key={item.id} > { item.label} </Link>
                    )
                }))}
            </div>
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">ABOUT US</h2>
                {aboutUs.map((item => {
                    return (
                        <Link to={`/ ${item.id}`} className="noul noulh font s14 color" key={item.id} > { item.label} </Link>
                    )
                }))}
            </div>
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">OLX</h2>
                {olx.map((item => {
                    return (
                        <Link to={`/ ${item.id}`} className="noul noulh font s14 color" key={item.id} > { item.label} </Link>
                    )
                }))}
            </div>
        </div>
        <div className="footerb flex">
            <h2 className="cfff font s14">Other Countries India - South Africa - Indonesia</h2>
            <h2 className="r cfff font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
        </div>
        </>
    );

}
export default Footer;    