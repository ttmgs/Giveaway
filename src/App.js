import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Home from './components/homePage/home';
import Prizes from './components/prizes/prizes';
import Contact from './components/contact/contact.js';

function App() {
  return (

    <Router>
   <Nav />
   <Route exact path="/" component={Home} />
   <Route exact path="/prizes" component={Prizes} />
   <Route exact path="/contact" component={Contact} />



   </Router>

  );
}

export default App;
