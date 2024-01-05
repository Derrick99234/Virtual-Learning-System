import React from 'react'
import "../fourzerofour/404.css"

const FourZeroFour = () => {
  return (
    <>
     <div id="error-page">
         <div className="content">
            <h2 className="header" data-text="404">
               
            </h2>
            <h4>
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist.
            </p>
            <div className="btns">
               <a href="#">return home</a>
            </div>
         </div>
      </div>

    </>
  );
};

export default FourZeroFour;
