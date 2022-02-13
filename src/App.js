import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Food from './components/pages/Food'
import Products from './components/pages/Products'
import SignUP from './components/pages/SignUP'
import Blog from './components/Blog';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/food' component={Food} />
          <Route path='/sign-up' component={SignUP} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
