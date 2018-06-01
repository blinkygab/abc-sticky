/*
const initialState = [
  {
    id: 1,
    text: 'testing1',
    x: 50,
    y: 50,
    z: 0,
    flipped: false
  },
  {
    id: 2,
    text: 'testing2',
    x: 300,
    y: 50,
    z: 0,
    flipped: false
  },
  {
    id: 3,
    text: 'testing3',
    x: 50,
    y: 300,
    z: 0,
    flipped: false
  },
  {
    id: 4,
    text: 'testing4',
    x: 300,
    y: 300,
    z: 0,
    flipped: false
  }
];
*/

const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          x: 0,
          y: 0,
          z: state.zIndex,
          flipped: false
        }
      ]
    case 'UPDATE_NOTE':
    case 'MOVE_NOTE':
    case 'FLIP_NOTE':
    case 'TOUCH_NOTE':
      let tempState = state.slice();
      tempState.forEach((note) => {
        if (note.id == action.id) {
          if (action.type === 'UPDATE_NOTE') {
            note.text = action.text;
          }
          if (action.type === 'MOVE_NOTE') {
            note.x = action.x;
            note.y = action.y;
          }
          if (action.type === 'FLIP_NOTE') {
            note.flipped = !note.flipped;
          }
          if (action.type === 'TOUCH_NOTE') {
            note.z = action.z;
          }
        }
      });
      return tempState;
    default:
      return state;
  }
}

export default notes;
