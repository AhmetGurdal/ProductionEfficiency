

// ---------------------------
//  External Dependencies
// ---------------------------
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// ---------------------------
//  Project Dependencies
// ---------------------------
import logo from './logo.svg';
import './App.css';


const Home = () => {
  return (
    <div>
      <h2>
        Home Page
      </h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>
        About Page
      </h2>
    </div>
  )
}

const App = () => (
  <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

      <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
  </Router>
)

export default App