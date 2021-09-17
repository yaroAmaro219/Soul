import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={(props) => (
      <Home />
      )} />
      <Route exact path="/" render={(props) => (
      <Post />
        )} />
        </Switch>
    </div>
  );
}

export default App;
