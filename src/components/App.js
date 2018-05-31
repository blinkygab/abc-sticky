import React, { Component } from 'react';
import Note from '../components/Note';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="sticky-app">
        <header className="sticky-header">ABC Sticky</header>
        <main className="sticky-body">
          <Note text="testing"></Note>
        </main>
      </div>
    );
  }
}

export default App;
