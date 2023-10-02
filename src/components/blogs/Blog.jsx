import React from "react";
import './blog.scss'
import { useParams,Outlet } from 'react-router-dom';
import Blogc from "../blog_card/Blogc";
import Blogdata from "./Blogdata";
import Blogcards from "../blogcardss/Blogcards";
import Mainblogcard from "../blogcardss/Mainblogcard"


function Blog() {
  const {name} = useParams()
  const domain = Blogdata[name];
  console.log(name)
  return (
    <>
      
        <div className="blog_container" style={{ background: domain.back }}>
          <svg className="svgc2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(78, 45, 98, 0.29)" fillOpacity="1" d="M0,192L40,202.7C80,213,160,235,240,245.3C320,256,400,256,480,213.3C560,171,640,85,720,48C800,11,880,21,960,32C1040,43,1120,53,1200,64C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
          <svg className="svgc1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255, 255, 255, 1)" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,256C384,277,480,267,576,266.7C672,267,768,277,864,277.3C960,277,1056,267,1152,272C1248,277,1344,299,1392,309.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <div className="block_items">
            <div className="block_leftitems">
              <Blogc main = {domain.maincardbg} outer={domain.outercardbg} inner={domain.innercardng} imag={domain.cardimage}/>
            </div>
            <div className="block_rightitems">
              <div className="domain_icon">
                <img src={domain.domainimg} alt="icon of the domain" />
              </div>
              <h2 className="blog_h1">{domain.blogh1}</h2>
              <p className="blog_h2">{domain.blogh2}</p>
              <div className="taught_details">
                <img className="taught_image" src={domain.taughtimage} alt="name" />
                <h4>{domain.taughtdesc}</h4>
              </div>
            </div>
          </div>
        </div>
        <Mainblogcard/>
      )
    </>
  );
}

export default Blog;
