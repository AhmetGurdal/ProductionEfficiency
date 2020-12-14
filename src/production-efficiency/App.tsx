// ---------------------------
//  External Dependencies
// ---------------------------
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// ---------------------------
//  Project Dependencies
// ---------------------------
import { NavigBar } from 'production-efficiency/components'
import { About, Home } from 'production-efficiency/pages'

const App = () => (
    <Router>
        <div>
            <NavigBa />
r
            <main className='pt-4'>
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </main>
        </div>
    </Router>
)

export default App
