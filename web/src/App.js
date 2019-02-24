import React, { Component } from 'react';
import './App.css';
import Home from './mainWindow/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NewVisitor from './newVisitor/NewVisitor';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/newVisitor" component={NewVisitor} />
        </div>
      </Router>
    );
  }
}

export default App;
