import React, { Component } from 'react';
import './App.css';

//Import Provider from react-redux and the store
import {Provider} from 'react-redux';
import store from './store';




import Counter from './Counter';

class App extends Component {
  render() {
    return( 
      //Wrap the App component in Provider and pass the store to it
      <Provider store={store}>
        <Counter />
      </Provider>
      )
  }
}

export default App;
