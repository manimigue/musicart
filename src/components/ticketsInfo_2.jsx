import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// import Link from './Link'

class ticketsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='tickets-info'>
        <h3>チケット情報</h3>
        <h5>チケット種類</h5>
        <p><b>先行予約チケット（自由席・無料）</b></p>
        <p><b>当日チケット（自由席・無料）</b></p>
        <ul>
          <li>当日チケットの引き換えは当日 13:00 より開始します。</li>
          <li>当日チケットの枚数は先行予約チケットの状況に応じて変動するため、予めご了承ください。</li>
        </ul>
        <p>本公演では未就学児のゲストの方もご来場して頂くことが出来ます。予めご了承ください。また、未就学児をお連れのゲストの方は演奏中、周りの方にご配慮頂きますようお願いいたします。</p>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return{}
};

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
        default:{
          return dispatch(push('/error'));
        }
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ticketsInfo);
