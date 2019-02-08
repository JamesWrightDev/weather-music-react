import React, { Component } from 'react';
import  {BrowserRouter, Route}  from 'react-router-dom';

import Home from './Components/Home';
import Result from './Components/Result';



import './App.scss';

class App extends Component {
  render() {
    const clickHandler = () =>{
      console.log('hello');
    }
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}></Route> 
            <Route exact path="/result" 
              render={(props) => <Result 
              name='London' 
              weather='Cold'
              temp='35'></Result>}/>   
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
