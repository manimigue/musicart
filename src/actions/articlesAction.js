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

export const saveHome = (type) => ({
  type: 'SAVE_HOME',
  payload: {
    type
  }
})

export const delHome = (type) => ({
  type: 'DEL_HOME',
  payload: {
    type
  }
})
