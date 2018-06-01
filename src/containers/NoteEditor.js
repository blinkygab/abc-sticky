import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Note from '../components/Note';
import { addNote } from '../actions/notes';
import '../styles/editor.css';

const initialState = {
  text: null
}

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  handleKeyDown(e) {
    if (e.which === 13) {
      this.handleSubmit();
    }
  }
  
  handleSubmit() {
    const { dispatch } = this.props;
    dispatch(addNote(this.state.text));
  }

  render() {
    return (
      <div className="note-editor">
        <input onChange={this.handleText} onKeyDown={this.handleKeyDown}></input>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default connect()(NoteEditor);
