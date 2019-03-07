import React, {Component} from 'react';
import './App.css';
import Home from './mainWindow/Home';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ApprovedVisitor from './components/ApprovedVisitor';
import FreshVisitor from './components/FreshVisitor';
import GatePass from './components/FreshVisitorScreens/GatePass';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/approvedVisitor" component={ApprovedVisitor}/>
                    <Route exact path="/freshVisitor" component={FreshVisitor}/>
                    <Route exact path="/gatePass" component={GatePass}/>
                </div>
            </Router>
        );
    }
}

export default App;
