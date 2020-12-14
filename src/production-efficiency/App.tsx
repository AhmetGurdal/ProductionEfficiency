// eslint-disable-next-line no-use-before-define
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavigBar } from 'production-efficiency/components'
import { About, Home } from 'production-efficiency/pages'

const App = () => (
    <Router>
        <div>
            <NavigBar />
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
