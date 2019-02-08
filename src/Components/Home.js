import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import axios from 'axios';
import Result from './Result';


import './Home.scss';

class Home extends Component {
  render() {
    this.state = {
      cities:[
        {name: 'London', id: 2643743},
        {name: 'New York', id: 5128638},
        {name: '東京', id: 1850692}]
    }
    const name = 'james';
    const fetchCity = (id, city) =>{
      console.log('city id:'+id);
      axios.get('http://api.openweathermap.org/data/2.5/weather?',{
        params:{
          id:id ,
          APPID: '47a2cf0724df255c6ab6a7cda5243ceb'
        }
      })
      .then(function(response){
        console.log(response);
        console.log('city temp:' + response.data.main.temp);
        console.log('city weather:' +response.data.weather[0].main);
      });
    }
    const cityList = this.state.cities.map(function(item){
      return(
        <div>
        <NavLink exact to="/result">
          <h1 onClick={() => fetchCity(item.id)}>{item.name}</h1>
        </NavLink>
        </div>
        
      );
    })
    return (
      <div>
        {cityList}
      </div>
    );
  }
}

export default Home;
