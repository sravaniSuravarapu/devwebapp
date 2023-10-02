import React from "react";
import './blogcard.scss'; 
import { Link,Outlet } from "react-router-dom";
import Blogcarddata from './Blogcarddata'
import { useParams,useNavigate } from "react-router-dom";

function Blogcards() {
  const {name}=useParams()
  const navigate = useNavigate();
  const filtereddata = Blogcarddata.filter(item => item.domain === name)
  return (
    <>
      {filtereddata.map((value, index) => (
        <div className="main-card" key={index}>
          <div className="sub-card" style={{ backgroundImage: value.backgroundImage }}>
            <div className="c-images">
              <img src={value.cardimage} alt="image1" className="size" />
              <div className="icons">
                <img src={value.icon1} className="icon1" alt="icon1" />
                <img src={value.icon2} className="icon2" alt="icon2" />
              </div>
            </div>

            <div className="card-text">
              <h1>{value.name}</h1>
              <h1>{value.heading2}</h1>
              <h1>{value.heading3}</h1>
            </div>
            <p>{value.subpara}</p>
            <div className="white">
              <img src={value.icon3} alt="star" />
            </div>
            <Link to={`/${value.domain}/${value.id}`} target="_blank">more</Link>
          </div>
        </div>
        
      ))}
      <Outlet />
      </>
  );
}

export default Blogcards;
