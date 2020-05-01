const initialState = {
  start :{
    'concert/light_and_magic': 0,
    'concert/valley_of_the_wind': 0,
    'news': 0,
    'stayHome': 0
  },
  selectedTag : {
    'concert/light_and_magic' : null,
    'concert/valley_of_the_wind' : null,
    'news' : null,
    'stayHome': null
  },
  tagDisp : {
    'concert/light_and_magic' : false,
    'concert/valley_of_the_wind' : false,
    'news' : false,
    'stayHome': false
  },
  logPart : {
    'concert/light_and_magic' : null,
    'concert/valley_of_the_wind' : null,
    'news' : null,
    'stayHome': null
  },
  home : {
    'concert/light_and_magic' : false,
    'concert/valley_of_the_wind' : false,
    'news' : false,
    'stayHome': false
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
      case "SAVE_HOME":
        return {
          ...state,
          home: {
            ...state.home,
            [action.payload.type] : true
          }
        }
      case "DEL_HOME":
        return {
          ...state,
          home:{
            ...state.home,
            [action.payload.type] : false
          }
        }
    default:
      return state;
  }
}
