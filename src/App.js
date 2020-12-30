import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router'
import Gallery from './Gallery/Gallery'
import './App.css';
import Homepage from "./Hompage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class App extends React.Component {
    render() {
        return <Router>
            <Route path="/" exact component={Homepage}/>
            <Route exact path="/gallery" exact component={Gallery}/>
            <Route exact path="/Shopping-Cart" exact component={ShoppingCart}/>
        </Router>
    }
}

export default App;
