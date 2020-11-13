import React from 'react';
import '../Props.css';
import '../App.css';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { facebook_login, set_data } from "../Store/Action/"

class Header extends React.Component {
    render() {
        const cat = [
            { id: 1, label: "Mobile  Phones" },
            { id: 2, label: "Car" },
            { id: 3, label: "Motorcycle" },
            { id: 4, label: "Houses" },
            { id: 5, label: "Tv-Videos-Audio" },
            { id: 6, label: "Tablets" },
            { id: 7, label: "Land & Plots" },
        ]
        let uname = this.props.current_user.name

        if (uname) {
            uname = this.props.current_user.name
        } else {
            uname = "Sign in"
        }


        return (
            <>
                <div className="header fixed flex">
                    <div className="logo">
                        <Link to="/" className="pointer"><img src={require("../ui/img/logo.png")} alt="icon" /></Link>
                    </div>
                    <div className="location rel flex aic">
                        <img className="icon-search s24" src={require("../ui/icons/search.svg")} alt="icon" />
                        <input className="label s15 font" placeholder="You Locations" />
                        <button className="icon-chevron-down arrow s24" ><img className="icon-search" src={require("../ui/icons/chevron-down.svg")} alt="icon" /> </button>
                    </div>
                    <div className="search flex aic">
                        <input type="text" placeholder="Find Cars Mobile Phones and more..." className="query font s15" />
                        <button className="go" > <img className="icon-search" src={require("../ui/icons/search-white.svg")} alt="icon" /> </button>
                    </div>
                    <div>
                        {/* <img className="icon-search aic" src={require("../ui/icons/bubble.svg")} />
            <img className="icon-search aic" src={require("../ui/icons/bell-o.svg")} /> */}
                    </div>
                    <div className="actions flex aic">
                        <Link to="/account/signin" className="color fontb s16 noul nouhl" > {uname} </Link>
                        <button className="sell flex aic color" >
                            <h2 className="s15 font"><span className="icon-plus s24 aic">+</span><Link to={(uname === "Sign in") ? "/account/signin" : "/account/sell"}>Sell</Link></h2>
                        </button>
                    </div>
                </div>
                <div className="hnav fixed flex">
                    <button className="view-cates flex aic color">
                        <h2 className="s18 font color"> All Categories</h2>
                        <button className="go arrow"><img className="icon-search" src={require("../ui/icons/chevron-down.svg")} alt="icon" /> </button>
                    </button>
                    {
                        cat.map(item => {
                            return (
                                <Link to={"/browser/" + item.id} className="noul noulh bl color font s15" key={item.id} > {item.label} </Link>
                            )
                        })
                    }
                </div>
                <div className="hclr" />
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    current_user: state.current_user,
})


export default connect(mapStateToProps, null)(Header);