import React , { Component } from 'react';
import { connect } from 'react-redux';
import log from '../news/log.json';
import Articles from './Articles'

class News extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    console.log(this.props);
    return (
      <Articles title='News' log={log} type='news'/>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
