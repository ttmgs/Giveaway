import React from "react";
import "../styles/home.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/images.jpg";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <div id="wallpaper">
        <div class="container-fluid">
          <h2>HOW TO ENTER THE DRAW </h2>
          <div id="box">
            <h1>
              Send a $30 etransfer to fariqjafer@gmail.com with your name{" "}
            </h1>
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
                View First Prize
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
