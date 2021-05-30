import React from 'react';
import '../styles/home.css';
import { Link, useLocation } from 'react-router-dom'


const Home = () => {
  const location = useLocation();

  return(
    <div class="container-fluid">
      <h2>HOW TO ENTER </h2>
      <div id="box">
        <h1>Send a $30 etransfer to fariqjafer@gmail.com with your name in the notes </h1>
      </div>

<div id="btnBox">
      <button class="button button5">
      <Link
            to="/prizes"
            className={
              location.pathname === "/prizes"
                ? "nav-link active"
                : "nav-link"
            }
          >
        Prizes</Link></button>
      </div>
      </div>
  )

}

export default Home;