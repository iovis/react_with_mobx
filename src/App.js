import React, { Component, Fragment } from 'react';
import Board from './components/Board';
import CardList from './components/CardList';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CardList store={this.props.store}/>
        <Board />
      </div>
    );
  }
}

export default App;
