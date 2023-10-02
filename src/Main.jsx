import {Route,Routes} from "react-router-dom"
import React from "react";
import Card from "./components/Card";
import App from "./App";
import Blogdata from "./components/blogs/Blogdata";
import Blog from "./components/blogs/Blog";
import Child from "./Child";


export default function Main(){
    return(
        <>
            <div className="main">
                <Routes>
                <Route path="/" element={<App/>}/>
                {/* <Route path="/:name" element={<Blog/>}/> */}
                <Route path="/:name" element={<Blog />}/>
                <Route path="/:name/:id" element={<Child />} />
               </Routes>
            </div>
            
        </>
    )
}

