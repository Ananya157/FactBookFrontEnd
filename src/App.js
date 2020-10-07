import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import CountryInfo from './Components/CountryInfo'
;
function App() {
  return (
    <div className="App">
    <Router>
        <div>
          <Switch> 
              <Route exact path='/' component={MainPage}></Route> 
              <Route exact path='/CountryInfo/name' component={CountryInfo}></Route> 
            </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
