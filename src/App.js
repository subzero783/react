
import './App.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Contact from './Components/Pages/Contact/Contact';

import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/servicios">
            <Services/>
          </Route>
          <Route path="/nosotros">
            <About/>
          </Route>
          <Route path="/contacto">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>

      <Footer />
      
    </div>
  );
}

export default App;
