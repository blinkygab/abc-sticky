import React from 'react';
import PropTypes from 'prop-types';
import { moveNote, flipNote } from '../actions/notes';
import '../styles/note.css';


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDragStart(e) {
    const el = e.currentTarget;
    this.startX = e.clientX;
    this.startY = e.clientY;
    setTimeout(() => el.classList.add('holding'));
  }

  handleDrop(e) {
    e.preventDefault();
    const { dispatch, id, x, y } = this.props;
    const newX = x + e.clientX - this.startX;
    const newY = y + e.clientY - this.startY;

    dispatch(moveNote(id, newX, newY));
    e.currentTarget.classList.remove('holding');
  }

  handleClick(e) {
    e.preventDefault();
    const { dispatch, id } = this.props;

    dispatch(flipNote(id)); 
  }
  
  render() {
    const { id, text, x, y, z, flipped } = this.props;
    const styles = {transform: `translate(${x}px, ${y}px)`, zIndex: z};
    const className = ((flipped) ? 'flip' : '') + ' sticky-note';

    return (
      <div 
        className={className}
        id={`note-${id}`} 
        style={styles}         
        onClick={this.handleClick} 
        onDragStart={this.handleDragStart} 
        onDragEnd={this.handleDrop} 
        draggable={!flipped ? true : false}>
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
