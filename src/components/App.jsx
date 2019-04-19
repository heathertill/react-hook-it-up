import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Details from './Details';
import Header from './Header'




const App = () => {
    return (
        <Router>
            <main className="container-fluid p-0">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id/details" component={Details} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;