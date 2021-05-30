import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Home from './components/homePage/home';
import Prizes from './components/prizes/prizes';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer';


function App() {
  return (

    <Router>
   <Nav />
   <Route exact path="/" component={Home} />
   <Route exact path="/prizes" component={Prizes} />
   <Route exact path="/contact" component={Contact} />

<Footer></Footer>

   </Router>

  );
}

export default App;
