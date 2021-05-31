import React from "react";
import "../styles/enter.css";
import { Link, useLocation } from "react-router-dom";
import screenshot from '../images/names.png';

const Enter = () => {
  const location = useLocation();


  return (
    <div>
      <div id="wallpaper">
        <div class="container-fluid">
          <h2>HOW TO ENTER THE DRAW </h2>
          <div id="box">
            <h1>
              etransfer $30 to fariqjafer@gmail.com with your name 
            </h1>
            <h5>** each ballot is $30, then $20 every other one</h5>
            <h3>DRAW DATE: Saturday, June 5th, 2021 @9PM</h3>
          </div>
<div id="how">
  <h1>How we will choose a winner</h1>
<img src={screenshot} alt='yo' style={{width: "420px", height: "250px"}}></img>
<h3>site: <a href="https://wheelofnames.com/">Wheel of names</a> </h3>
<h5>p.s no bias </h5>
<h5 id="red">** draw will be live on worldstar windsor instagram @9pm</h5>
</div>
<div id="btnBox">
<div class="wrap">
<Link
                to="/prizes"
                className={
                  location.pathname === "/prizes"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                 
  <button class="button">
  View Prize
              </button>
              </Link>

</div>
</div>
        </div>
      </div>

    </div>
  );
};

export default Enter;
