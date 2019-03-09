import React, {Component} from 'react';
import './App.css';
import Home from './mainWindow/Home';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ApprovedVisitor from './components/ApprovedVisitor';
import FreshVisitor from './components/FreshVisitor';
import EmployeeGatePass from './components/EmployeeGatePass';
import WebcamCapture from './components/WebcamCapture';
import EmployeeGatePassError from './components/EmployeeGatePassError';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/exp" component={WebcamCapture}/>
                    <Route exact path="/approvedVisitor" component={ApprovedVisitor}/>
                    <Route exact path="/freshVisitor" component={FreshVisitor}/>
                    <Route exact path="/empGatePass" render={(props) => <EmployeeGatePass {...props}/>}/>
                    <Route exact path="/empGatePassError" component={EmployeeGatePassError}/>
                </div>
            </Router>
        );
    }
}

export default App;
