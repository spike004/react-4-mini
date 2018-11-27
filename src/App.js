import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './componenents/Home';
import About from './componenents/About';
import Products from './componenents/Products';



class App extends Component {
  render() {
    return (
     
       <Router>
         <div>
           <Link to='/'>
           <button>Home</button>
           </Link>
           <Link to='/about'>
           <button>About</button>
           </Link>
           <Link to='/products'>
           <button>Products</button>
           </Link>

       <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/about' component={About}/>
       <Route path='/products' component={Products}/>
       </Switch>
         </div>
     </Router>
     
    );
  }
}

export default App;


