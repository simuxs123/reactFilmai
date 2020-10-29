import React from 'react';
import './App.css';
import Movie from './Movie';
import Description from './Description';
import {BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
      <Router>
        <div className="Container-fluid">
        <Route exact path='/'>
          <Movie/>
        </Route>    
        <Route path='/:id' component={Description}></Route>
        </div>  
      </Router>
      
    
  );
}

export default App;
