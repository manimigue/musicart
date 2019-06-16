import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Link from './Link'

class ticketsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='tickets-info'>
        <h4>チケット情報</h4>
        <h5>チケット種類</h5>
        <p><b>先行予約チケット(自由席・一部指定席)</b><br/>一般・学生共通 1,000円<br/>小人(中学生以下)無料<br/></p>
        <p><b>当日チケット(自由席・一部指定席)</b> <br/>一般 1,500 円 <br/>学生(高校生以上、要学生証)1,000 円 <br/>小人(中学生以下)無料</p>
        <p><b>松戸フリーチケット(自由席・一部指定席)</b> <br/>松戸市に在住、在勤、在学の方のみ(要証明)500 枚限定の無料チケット <br/>当日先着順でお配りいたします。</p>
        <p><b>団体チケット(指定席)</b><br/>20 名以上の団体予約に限り、団体専用指定席をご案内します。<br/><Link type="Route" url="/contact">お問い合わせフォーム</Link>からご連絡ください。<br/></p>
        <ul>
          <li>チケットの引き換え、当日チケットの販売は、当日 17:30 より開始します。</li>
          <li>当日チケットの枚数は先行予約チケットの状況に応じて変動するため、予めご了承ください。</li>
        </ul>
        <p>本公演では未就学児のゲストの方もご来場して頂くことが出来ます。予めご了承ください。また、未就学児をお連れのゲストの方は演奏中、周りの方にご配慮頂きますようお願いいたします。</p>
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
