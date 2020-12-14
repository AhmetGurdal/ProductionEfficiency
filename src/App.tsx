

// ---------------------------
//  External Dependencies
// ---------------------------
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
// ---------------------------
//  Project Dependencies
// ---------------------------

import './App.css'; 
import { NavigBar } from './components';
import { About, Home } from './pages';


const App = () => (
  <Router>
    <div>
      <NavigBar />

      <main className="pt-4">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
)

export default App