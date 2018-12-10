import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import NoteList from './components/NotesList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <NoteList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;