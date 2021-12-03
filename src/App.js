import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;