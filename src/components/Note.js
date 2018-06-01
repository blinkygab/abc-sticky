import React from 'react';
import PropTypes from 'prop-types';
import { moveNote } from '../actions/notes';
import '../styles/note.css';


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.flipped = false;
  }

  handleDragStart(e) {
    const el = e.currentTarget;
    this.startX = e.clientX;
    this.startY = e.clientY;
    el.classList.remove('enable-back');
    setTimeout(() => el.classList.add('holding'));
  }

  handleDrop(e) {
    e.preventDefault();
    const { dispatch, id, x, y } = this.props;
    const newX = x + e.clientX - this.startX;
    const newY = y + e.clientY - this.startY;

    dispatch(moveNote(id, newX, newY))
    e.currentTarget.classList.remove('holding');
  }

  handleClick(e) {
    e.preventDefault();
    const el = e.currentTarget;
    if (!this.flipped) {
      el.classList.add('enable-back');
      el.draggable = false;
      setTimeout(() => el.classList.add('flip'));
    } else {
      el.draggable = true;
      setTimeout(() => el.classList.remove('flip'));
    }
    this.flipped = !this.flipped;
  }
  
  render() {
    const { id, text, x, y } = this.props;
    const styles = {transform: `translate(${x}px, ${y}px)`};
    const className = ((this.held) ? 'held' : '') + ' sticky-note'

    return (
      <div 
        className="sticky-note"
        id={`note-${id}`} 
        style={styles}         
        onClick={this.handleClick} 
        onDragStart={this.handleDragStart} 
        onDragEnd={this.handleDrop} 
        draggable="true">
        <div className="sticky-note--front"><p className="sticky-note--text">{text}</p></div>
        <div className="sticky-note--back"></div>
      </div>
    );  
  }
}

Note.propTypes = {
  text: PropTypes.string.isRequired
}

export default Note;
