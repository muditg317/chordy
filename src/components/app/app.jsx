import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import './app.scss';
import './universal.scss';

import AppHeader from './app-header';
// import AppFooter from './app-footer';
import ChordRecognizer from '../chordRecognizer';
import About from '../about';

export default function App() {
    return (
            <HashRouter basename='/'>
                <div className="app">
                    <AppHeader />
                    <div className="app-content">
                        <Switch>
                            <Route exact path="/" component={ChordRecognizer} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                    {
                        // <AppFooter />
                    }
                </div>
            </HashRouter>
        );
}
