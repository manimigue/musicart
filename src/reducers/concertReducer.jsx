import ConcertLogo from '../img/concert2019_logo.png';
import ComingSoon from '../img/coming-soon.png';

const initialState = {
  concert: false,
  concerts : [
    {
      title:"光と魔法のコンサート in 森のホール 21",
      img:ConcertLogo,
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
