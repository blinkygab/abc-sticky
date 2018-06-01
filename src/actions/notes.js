export const addNote = (text) => ({
  type: 'ADD_NOTE',
  id: Date.now(),
  text
});

export const touchNote = (id) => (dispatch, getState) => {
  const state = getState();
  const { zIndex } = state.app;
  dispatch({
    type: 'TOUCH_NOTE',
    id,
    z: zIndex
  })
};

export const moveNote = (id, x, y) => (dispatch) => {
  dispatch(touchNote(id));
  dispatch({
    type: 'MOVE_NOTE',
    id,
    x,
    y
  })
};

export const flipNote = (id) => (dispatch) => {
  dispatch(touchNote(id));
  dispatch({
    type: 'FLIP_NOTE',
    id  
  });  
}
