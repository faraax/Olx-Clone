import React from 'react';
import '../App.css';
import '../Props.css';
import Slider from "./Slider";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from "react-redux"
import { facebook_login, set_data } from "../Store/Action/"

class Signin extends React.Component {
    render() {
        return (
            <div className="bg-sell flex"  >
                <div className="signin-form">
                    <div className="close">
                        <Link to="/"><h1>+</h1></Link>
                    </div>
                    <div className="login-box">
                        <div className="carousel-inner">
                            <Slider />
                            <div >
                                <div>
                                    <button className="Auth font c333 b anim s16">Continue with Phone</button>
                                    <button className="Auth font c333 b anim s16" onClick={() => this.props.facebook_login()}>Continue with Facebook</button>
                                    <button className="Auth font c333 b anim s16">Continue with Google</button>
                                </div>
                                <div className="login-info">
                                    <p style={{ textAlign: "center" }}>We won't share your personal details with anyone</p>
                                    <p style={{ textAlign: "center" }}>If you continue, you are accepting <a href="https://help.olx.com.pk/hc/en-us">OLX Terms and Conditions and Privacy Policy</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    users:state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data()),
    facebook_login: () => dispatch(facebook_login()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
