import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home/home';
import Portifolio from './pages/Portifolio/portifolio';
import Galeria from './pages/Galeria/galeria';

export default function Routes() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Portifolio" component={Portifolio} />
                    <Route path="/Galeria" component={Galeria} />
                </Switch>
        </Router>
    );
}