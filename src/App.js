import React from 'react';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Blog } from './models/';


function App() {
  const handleCreateAuthor = async () => {
    return (
      await DataStore.save(
        new Blog({
          "name": "Ramya",
          "posts": []
        })
      )
    );
  }

  const handleSearchAuthor = async () => {
    const models = await DataStore.query(Blog);
    return (
      console.log(models)
    );
}
return (
  <div className="App">
    <h1>Hello World</h1>
    <button onClick={handleCreateAuthor}>Create Author</button>
    <button onClick={handleSearchAuthor}>Search Author</button>
  </div>
);
}

export default App;
