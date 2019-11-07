import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../index.css';
import '../static/css/carousel.css';
import Pictures from '../components/Pictures'

const mapStateToProps = ({homepic}) => ({
  pictures: homepic.pictures.program_2019,
  interval : null
});

const mapDispatchToProps = (dispatch) => {
  return {
    linkToPage(type,url){
      switch (type) {
        case 'Route':{
          return (dispatch(push(url)));
        }
        case 'a':{
          window.location.href=url;
          break;
        }
        case "None":{
          break;
        }
        default:{
          return dispatch(push('/error'));
        }
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);
