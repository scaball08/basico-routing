import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";
function App() {
  return (

   

<Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <NavLink className="navbar-brand" to="/#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">

        <Switch>
        <Route path="/nosotros/:id">
          <User/>
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/nosotros">
          <Nosotros />
        </Route>

        <Route path="/" exact>
          <Inicio />
        </Route>
      </Switch>
      </div>

      
    </Router>
    
    
    
  );
}

export default App;
