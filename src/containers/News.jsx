import React , { Component } from 'react';
import { connect } from 'react-redux';
import log from '../news/log.json';
import tags from '../news/tag.json';
import Articles from './Articles'

class News extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Articles title='News' log={log} type='news' range={5} tags={tags}/>
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
