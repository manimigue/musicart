import ConcertLogo1 from '../img/concert2019_logo.png';
import ConcertLogo2 from '../img/concert_wind_logo.png';
import ComingSoon from '../img/coming-soon.png';

const initialState = {
  concert: false,
  concerts : [
    {
      title:"Ghibli Collection 風の谷へ",
      img:ConcertLogo2,
      alt:"風の谷へロゴ",
      link:true,
      url:"valley_of_the_wind"
    },
    {
      title:"光と魔法のコンサート in 森のホール 21",
      img:ConcertLogo1,
      alt:"光と魔法のコンサートロゴ",
      link:true,
      url:"light_and_magic"
    },
    {
      title:"Coming Soon!",
      img:ComingSoon,
      alt:"Coming Soon",
      link:false,
      url: null
    }
  ]
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'ON_CONCERT':
      return {
        ...state,
        concert: true
      };
    case 'OUT_CONCERT':
      return {
        ...state,
        concert: false
      };

    default:
      return state;
  }
}
