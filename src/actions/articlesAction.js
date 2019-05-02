export const saveStart = (start, type) => ({
  type : 'SAVE_START',
  payload: {
    start,
    type
  }
})
