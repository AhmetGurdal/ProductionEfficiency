

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
import { NavigBar } from './components';
import { About, Home } from './pages';


const App = () => (
  <Router>
    <div>
      <NavigBar />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  </Router>
)

export default App