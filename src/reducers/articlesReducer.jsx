const initialState = {
  start :{
    'concert': 0,
    'news': 0
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
    default:
      return state;
  }
}
