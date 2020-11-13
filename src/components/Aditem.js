import React from 'react';

function Aditem({ style, cost, disc }) {
    // if ("placeholder" in props) {
    //     return (
    //         <div className="ad-item">
    //             <div className="poster anim placeholder" />
    //             <div className="title anim placeholder" />
    //             <div className="tagline anim placeholder" />
    //             <div className="ftr anim flex" >
    //                 <div className="location anim placeholder" />
    //                 <div className="stamp anim placeholder" />
    //             </div >
    //         </div>
    //     )
    // }
    return (
        <div className="ad-item">
            <div className="poster anim placeholder" style={style} />
            <div className="title anim placeholder s20" ><h3>RS {cost}</h3></div>
            <div className="tagline anim placeholder" ><p>{disc}</p></div>
            <div className="ftr anim flex" >
                <div className="location anim placeholder" />
                <div className="stamp anim placeholder" />
            </div >
        </div>
    );
}

export default Aditem;