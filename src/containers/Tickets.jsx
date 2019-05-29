import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketTypeNum : 1
    };
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

  render() {
    const mail = "manimigue0701@gmail.com";
    const tel = "0312345678"
    const ticketTypeNum = this.state.ticketTypeNum;
    console.log(ticketTypeNum);
    const {ticketTypes, ticketMax} = this.props;
    const ticketSelect = (type) => (
      type <= ticketTypeNum ?
        <div className={"ticket-type type" + type.toString()}>
          <h5>券種{type}</h5>
          <Form.Control name={'券種' + type.toString()} as="select">
            {
              ticketTypes.map((t) => (<option key={t} value={t}>{t}</option>))
            }
          </Form.Control>
          <h5>枚数{type}</h5>
          <Form.Control name={'枚数' + type.toString()} as="select">
            {
              Array.from(Array(ticketMax), (v, num) => (<option key={num} value={num + 1}>{num + 1}</option>))
            }
          </Form.Control>
        </div>
      : null
    )
    return (
      <React.Fragment>
        <h2 className='title'>Tickets</h2>
        <div className='tickets-info'>
          <h4>チケット情報</h4>
          <p></p>
        </div>
        <div className='tickets-buy' >
          <div className='ticketpay'>
            <h4>1. チケットペイで購入</h4>
            <Button>購入</Button>
          </div>
          <div className='tickets-form'>
            <h4>2. ホームページで予約する</h4>
            <form method="POST" action={"https://formspree.io/" + mail} >
              { ticketSelect(1) }
              { ticketSelect(2) }
              { ticketSelect(3) }
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
          </div>
          <div className='tickets-tel'>
            <h4>3. 電話で予約する</h4>
            <p >電話番号 <a href={"tel:"+tel}>{tel}</a></p>
          </div>


        </div>
      </React.Fragment>

    );
  }
}

const mapStateToProps = ({tickets}) => ({
  ticketTypes : tickets.ticketTypes,
  ticketMax : tickets.ticketMax
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
