import React from 'react';
import NotesContainer from '../containers/NotesContainer';
import NoteEditor from '../containers/NoteEditor';
import '../styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="sticky-app">
        <NotesContainer />
        <NoteEditor />
      </div>
    );
  }
}

export default App;
