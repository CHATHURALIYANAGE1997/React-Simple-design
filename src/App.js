import React from 'react';
import './App.css';
import {BrowserRouter, BrowserRouter as Routes, Route, Switch} from 'react-router-dom';
import welcomepage from './pages/Welcomepage';
import HeaderComponent from './components/HeaderComponent ';
import Welcomepage from './pages/Welcomepage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
                <div className="text-center">
                    <Route> 
                          <Route path = "/" exact component = {Welcomepage}></Route>
                           {/*<Route path = "/home" exact component = {}></Route> */}
                    </Route>
                </div>
              
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
