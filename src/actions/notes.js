export const addNote = (text) => ({
  type: 'ADD_NOTE',
  id: Date.now(),
  text
});

export const updateNote = (id, text) => ({
  type: 'UPDATE_NOTE',
  id,
  text
});

export const moveNote = (id, x, y) => ({
  type: 'MOVE_NOTE',
  id,
  x,
  y
});
