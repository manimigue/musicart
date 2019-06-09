import Concert from '../img/concert2019_logo.png';
import About from '../img/aboutlogo.png'

const initialState = {
  pictures: [
    {
      img : Concert,
      link : {
        text : 'concert logo',
        type : 'Route',
        url : '/concert/light_and_magic'
      }
    },
    {
      img : About,
      link : {
        text : 'About Orchestra Mµsicart',
        type : 'Route',
        url : '/about'
      }
    }
  ],
};

function homepicReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homepicReducer;
