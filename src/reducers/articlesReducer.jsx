const initialState = {
  start :{
    'concert': 0,
    'news': 0
  },
  selectedTag : {
    'concert' : null,
    'news' : null
  },
  tagDisp : {
    'concert' : false,
    'news' : false
  },
  logPart : {
    'concert' : null,
    'news' : null
  }
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'SAVE_START':
      return{
        ...state,
        start: {
          ...state.start,
          [action.payload.type] : action.payload.start
        }
      };
      case 'SAVE_TAG':
        return{
          ...state,
          selectedTag: {
            ...state.selectedTag,
            [action.payload.type] : action.payload.selectedTag
          },
          tagDisp: {
            ...state.tagDisp,
            [action.payload.type] : action.payload.tagDisp
          },
          logPart: {
            ...state.logPart,
            [action.payload.type] : action.payload.logPart
          }
        }
    default:
      return state;
  }
}
