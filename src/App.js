import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Enter from './components/enter/enter';
import Prizes from './components/prizes/prizes';
import Contact from './components/contact/contact.js';
import Home from './components/home/home';


function App() {
  return (

    <Router>
   <Nav />
   <Route exact path="/" component={Home} />
   <Route exact path="/enter" component={Enter} />
   <Route exact path="/prizes" component={Prizes} />
   <Route exact path="/contact" component={Contact} />


   </Router>

  );
}

export default App;
