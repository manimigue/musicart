export const saveStart = (start, type) => ({
  type : 'SAVE_START',
  payload: {
    start,
    type
  }
})

export const saveTag = (selectedTag, tagDisp, logPart, type) => ({
  type: 'SAVE_TAG',
  payload: {
    selectedTag,
    tagDisp,
    logPart,
    type
  }
})
