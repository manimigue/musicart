import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from '../components/Link'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet';
import Info from '../components/ticketsInfo'

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketTypeNum : 1,
      on : {
        form1: "on",
        form2: "commingSoon",
        pay: "commingSoon",
        livepocket : "commingSoon"
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  addTicket = () => {
    if (this.state.ticketTypeNum < 3){
      this.setState({
        ticketTypeNum : this.state.ticketTypeNum + 1
      })
    }
  }

  reduceTicket = () => {
    if (this.state.ticketTypeNum > 1){
      this.setState({
        ticketTypeNum : this.state.ticketTypeNum - 1
      })
    }
  }

  onWhich = (on,component) => {
    switch (on) {
      case "on":
        return component;
      case "commingSoon":
        return <h5 style={{marginBottom:"30px"}}>Comming soon</h5>;
      case "end":
        return <h5 style={{marginBottom:"30px"}}>販売終了しました。</h5>;
      default:
        return component;
    }
  }

  render() {
    const mail = "orchestra.musicart.ticket@gmail.com";
    const ticketTypeNum = this.state.ticketTypeNum;
    const {ticketTypes, ticketMax} = this.props;
    const ticketSelect = (type) => (
      <div className={"ticket-type type" + type.toString()}>
        <h5>券種{type}</h5>
        <Form.Control name={'券種' + type.toString()} as="select" disabled={type > ticketTypeNum}>
          {
            ticketTypes.map((t) => (<option key={t} value={t}>{t}</option>))
          }
        </Form.Control>
        <h5>枚数{type}</h5>
        <Form.Control name={'枚数' + type.toString()} as="select" disabled={type > ticketTypeNum}>
          {
            Array.from(Array(ticketMax), (v, num) => (<option key={num} value={num + 1}>{num + 1}</option>))
          }
        </Form.Control>
      </div>
    )

    const ticketForm = () => (
      <React.Fragment>
        <p>下記のフォームに入力していただき、送信してください。<br/>1 週間以内に確認の連絡を送らせて頂きます。</p>
        <form method="POST" action={"https://formspree.io/" + mail} >
          { ticketSelect(1) }
          <Fade collapse when={2 <= ticketTypeNum}>{ ticketSelect(2) }</Fade>
          <Fade collapse when={3 <= ticketTypeNum}>{ ticketSelect(3) }</Fade>
          {this.state.ticketTypeNum < 3 ? <Button onClick={this.addTicket} className='add-ticketTypes'> + </Button> : null}
          {this.state.ticketTypeNum > 1 ? <Button onClick={this.reduceTicket} className='reduce-ticketTypes'> - </Button> : null}
          <h5>代表者名</h5>
          <input type='text' name='代表者名' placeholder="佐藤　太郎" />
          <h5>メールアドレス</h5>
          <input type="email" name="返信先メールアドレス" placeholder="you@example.com"/>
          <h5>電話番号</h5>
          <input type="tel" name="返信先電話番号" placeholder="09012345678"/>
          <h5>その他お問い合わせ</h5>
          <textarea name='お問い合わせ内容'></textarea>
          <input className='submit' type="submit" value='Send'/>
        </form>
      </React.Fragment>
    )
    const TicketPay = (url) => (
      <React.Fragment>
        <p></p>
        <Link type="a" url={url}>チケットペイ</Link>
      </React.Fragment>
    )

    const LivePocket = (url) => (
      <React.Fragment>
        <p></p>
        <Link type="a" url={url}>livepocket</Link>
      </React.Fragment>
    )

    return (
      <div className='tickets'>
        <Helmet>
          <title>Mμsicart チケット情報</title>
        </Helmet>
        <div className="title"><h2 >Tickets</h2></div>
        <Info />
        <div className='tickets-how'>
          <h4>チケット予約方法</h4>
          <h5>ホームページでのチケット予約（第1次）</h5>
          <p>6月20日より開始</p>
          <h5>ホームページでのチケット予約（第2次）</h5>
          <p>9月上旬頃開始</p>
          <h5>チケットペイでのチケット予約</h5>
          <p>8月上旬頃開始</p>
          <h5>livepocketでのチケット予約</h5>
          <p>8月上旬頃開始</p>
          <p>チケット予約が開始しましたら、ホームページ、SNS等でアナウンスさせて頂きます。<br/>各チケット予約方法にて、予約が定員に達し次第、受付を終了させていただきます。予めご了承ください。</p>
        </div>
        <div className='tickets-buy' >
          <h4>チケット予約</h4>
          <div className='tickets-form'>
            <h5>ホームページでのチケット予約(第 1 次)</h5>
            {this.onWhich(this.state.on.form1,ticketForm())}
          </div>
          <div className='tickets-form'>
            <h5>ホームページでのチケット予約(第 2 次)</h5>
            {this.onWhich(this.state.on.form2,ticketForm())}
          </div>
          <div className='ticketpay'>
            <h5>チケットペイでのチケット予約</h5>
            {this.onWhich(this.state.on.pay,TicketPay)}
          </div>
          <div className='livepocket'>
            <h5>livepocketでのチケット予約</h5>
            {this.onWhich(this.state.on.livepocket,LivePocket)}
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({tickets}) => ({
  ticketTypes : tickets.ticketTypes,
  ticketMax : tickets.ticketMax
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
