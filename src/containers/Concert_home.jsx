import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ConcertLogo from '../img/concert2019_logo.png';
import ComingSoon from '../img/coming-soon.png';

class Concert_home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='concert'>
        <h2 className='title'>Concerts</h2>
        <div className='concertLinks'>
          <div className="concertLink concert2019 col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <h5>光と魔法のコンサート in 森のホール 21</h5>
            <img src={ConcertLogo} alt="コンサートロゴ" onClick={() => this.props.linkToPage('Route','/concert/light_and_magic')} />
          </div>
          <div className="concertLink concert2019 col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <h5>Coming Soon!</h5>
            <img src={ComingSoon} alt='Coming Soon' style={{cursor:'auto'}}/>
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  linkToPage(type,url){
    switch (type) {
      case 'Route':{
        return (dispatch(push(url)));
      }
      case 'a':{
        window.location.href=url;
        break;
      }
      default:{
        return dispatch(push('/error'));
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Concert_home);
