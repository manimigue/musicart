import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Link from '../components/Link'
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
        <Tab className="Tab" eventKey={tab.tab} color={tab.color} title={tab.tab} key={tab.tab} style={{backgroundImage: `url(${tab.img})`}}>
          <div className="Tab-mask">
            <h2>{tab.head}</h2>
            <p>{tab.sub}</p>
            {tab.text}
            <p>ご連絡は<Link type={tab.type} url={tab.url}>お問い合わせフォーム</Link>まで</p>
          </div>
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
