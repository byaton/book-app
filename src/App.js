import React, { Component } from 'react';
import './App.css';
import BookList from './components/bookList/bookList';
import BookDetail from './components/bookDetail/bookDetail';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Switch>
          <Route path="/bookdetail" exact component={BookDetail}/>
          <Route path="/" exact component={BookList}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App ;
