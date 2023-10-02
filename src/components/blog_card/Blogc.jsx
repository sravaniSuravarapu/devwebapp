import React from "react";
import img1 from "../../assests/icon1.png"
import './blogc.scss'

function Blogc(props){
    return(
        <>
            <div className="maincard" style={{ background: props.main }}>
            <div className="anime">
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
            </div>
            <img src={img1} className="imgsr" alt="icon"></img>
            </div>
        </>
    )
}
export default Blogc