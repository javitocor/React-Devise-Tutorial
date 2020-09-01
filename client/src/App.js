import React from 'react';
import {
  HashRouter as Router, 
  Route
} from 'react-router-dom';
import PostList from './components/PostList';
import './App.css';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/new" component={NewPost} />
      </div>
    </Router>
  );
}

export default App;
