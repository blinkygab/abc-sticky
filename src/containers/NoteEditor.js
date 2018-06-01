import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Note from '../components/Note';
import { updateNote } from '../actions/notes';

const initialState = {
  id: null,
  text: null
}

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ id: e.target.value });
  }
  
  handleText(e) {
    this.setState({ text: e.target.value });
  }
  
  handleSubmit(e) {
    const { dispatch } = this.props;
    dispatch(updateNote(this.state.id, this.state.text));
  }

  render() {
    return (
      <div className="note-editor">
        <input type="text" onChange={this.handleInput}></input>
        <textarea onChange={this.handleText}></textarea>
        <button onClick={this.handleSubmit}>Update</button>
      </div>
    )
  }
}

export default connect()(NoteEditor);
