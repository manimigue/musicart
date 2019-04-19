import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../index.css';
import '../static/css/members.css'

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'Orchestra',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const tabs = this.props.tabs.map(tab => {
      return (
        <Tab eventKey={tab.tab} color={tab.color} title={tab.tab}>
          <h2>{tab.head}</h2>
          <p><i className="material-icons" color={tab.color}>{tab.icon}</i>{tab.sub}</p>
          {tab.text}
          <p>ご連絡は<button className='link-button' onClick={()=>this.props.linkToPage(tab.type,tab.url)}>お問い合わせフォーム</button>まで</p>
        </Tab>
      );
    });
    return (
      <Tabs
        id="member-tab"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        {tabs}
      </Tabs>
    );
  }
}

const mapStateToProps = ({links}) => {
  return{
    tabs: links.membersLinks
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Members);
