import React, { Component } from "react";
import '../App.css';
import Carousel from "react-bootstrap/Carousel"

export default class SimpleSlider extends Component {
    constructor() {
        super()
        this.state = {
            src: ["https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png", "https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png", "https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png"],
            title: ["Help make OLX safer place to buy and sell", "Contact and close deals faster", "Save all your favorite items in one place"]
        }
    }
    render() {
        return (
            <>
                <Carousel>
                    {this.state.src.map((v, i) => {
                        return (
                            <Carousel.Item >
                                <img src={v} key={i} alt="logo" />
                                <Carousel.Caption>
                                    <h3 >{this.state.title[i]}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </>
        );
    }
}