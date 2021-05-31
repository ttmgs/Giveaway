import React from 'react';
import '../styles/home.css';
import { Link, useLocation } from 'react-router-dom'
import Footer from '../footer/footer';


const Home = () => {
  const location = useLocation();

  return(
    <div>
      <div id="wallpaperone">
    <div class="container">
      <div id="title">
          <h1 id="h1">  WINDSOR GIVEAWAYS🎁</h1>
          
          </div>



          <div id="text">
  <h3>
  <Link
to="/enter"
className={
  location.pathname === "/enter"
    ? "nav-link active"
    : "nav-link"
}
>
    
    
    
    click here</Link> on how to enter </h3>
</div>

<div id="description">
<h4>Dont leave yet... you havent seen the prize!👀</h4>

</div>

</div>
</div>
<Footer />
</div>
  )
}

export default Home;