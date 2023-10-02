import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import MainBlog1 from './Routes/MainBlog1'
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <div className="card-container">
    <App/>
    </div> */}
   {/* <MainBlog1/> */}

   
   <BrowserRouter>
   <Main/>
   </BrowserRouter>

  </>
  
    
);


