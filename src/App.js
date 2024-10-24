import React from 'react';
import './App.css';
import Hmpg from './component/Hmpg'
import Showmovielist from './component/Showmovielist'
import Navbar from './component/Navbar'
import Summary from './component/Summary'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
       <Navbar/>
      
      <Showmovielist/>

      <Routes>
        <Route exact path ="/" element = {<Hmpg/>}></Route>
        <Route exact path ="/summary" element = {<Summary/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

