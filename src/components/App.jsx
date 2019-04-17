import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Details from './Details';



const App = () => {

    return (
        <Router>
            <div className="jumbotron">
                <h1 className="display-4">Hello World</h1>
            </div>
            <main className="container">
            <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/:id/details" component={Details} />
            </Switch></main>
        </Router>
    )

}


export default App