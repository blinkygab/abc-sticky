import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Note from '../components/Note';

class NotesContainer extends React.Component {  
  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;

    return (
      <div className="sticky-body">
        <ul>
          {notes.map(note =>
            <li key={note.id}>
              <Note {...note} {...this.props} />
            </li>
          )}
        </ul>
      </div>    
    )
  }
}

NotesContainer.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(NotesContainer);
