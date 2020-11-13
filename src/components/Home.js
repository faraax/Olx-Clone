import React from 'react';
import '../Props.css';
import '../App.css';
import Aditem from '../components/Aditem'
import phn from '../ui/img/phone.jpg'
import fan from '../ui/img/fan.png'
import car from '../ui/img/car.jpg'
import ps from '../ui/img/ps.jpg'
import lcd from '../ui/img/lcd.png'
import cat from '../ui/img/cat.jpg'
import adimg from '../ui/img/phone-app.png'


function Home() {
    return (
        <>
            <div className="home-page flex">
                <div className="ad-list flex">
                    <Aditem style={{ backgroundImage: `url(${fan})`, width: "100;" }} cost="15000" disc="Total new condition with compay operation fan for sale" />
                    <Aditem style={{ backgroundImage: `url(${car})`, width: "100" }} cost="45000" disc="New car 10/10 condition only serios buyer contact" />
                    <Aditem style={{ backgroundImage: `url(${ps})`, width: "100" }} cost="65000" disc="Ps-4 for sale with new games" />
                    <Aditem style={{ backgroundImage: `url(${cat})`, width: "100" }} cost="54000" disc="Persian cat for sale" />
                    <Aditem style={{ backgroundImage: `url(${lcd})`, width: "100" }} cost="12000" disc="LCD for sales little spot 7/10 condition" />
                    <Aditem style={{ backgroundImage: `url(${phn})`, width: "100" }} cost="87000" disc="Iphone 7 plus with box and other things" />
                </div>
            </div>
            <button className="load-more font c333 b anim s16">
                Load More
            </button>
            <div className="app-ribbon flex aic" >
                <div className="img">
                    <img className="bl" src={adimg} alt="icon"  />
                </div>
                <div className="meta">
                    <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
                    <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile. </h2>
                </div>
                <div className="links">
                    <h2 className="title fontb s20 color">GET YOUR APP TODAY</h2>
                    <div className="flex as">
                        <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png"  alt="icon" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" alt="icon"  /></a>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Home;    