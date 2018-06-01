const initialState = [
  {
    id: 1,
    text: 'testing1',
    x: 50,
    y: 50
  },
  {
    id: 2,
    text: 'testing2',
    x: 300,
    y: 50
  },
  {
    id: 3,
    text: 'testing3',
    x: 50,
    y: 300
  },
  {
    id: 4,
    text: 'testing4',
    x: 300,
    y: 300
  }
];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'MOVE_NOTE':
    case 'UPDATE_NOTE':
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
        }
      });
      return tempState;
    default:
      return state;
  }
}

export default notes;
