import React , { Component } from 'react';
import { connect } from 'react-redux';
import log from '../stayHome/log.json'
import Articles from './Articles'

class StayHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Articles title='Stay Home' log={log} type='stayHome' range={10} twitter={false}/>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StayHome);
