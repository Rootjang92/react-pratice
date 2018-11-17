import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const text = 'Are you kidding me?'
    const condition = true;
    const style = {
      backgroundColor: 'red',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all'
    }
    return (
    <div className="my-div">
      <h1>리액트 !!!</h1>
      <h2>Are you awesome guys?</h2>
      <h3>{text}</h3>
      {
        condition && 'Plz look at me'
      }
      <div style={style}></div>
    </div>
    );
  }
}

export default App;
