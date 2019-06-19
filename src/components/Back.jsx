import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { push } from 'react-router-redux';
import { delHome } from '../actions/articlesAction'

class Back extends Component {
  static defaultProps = {
    home : false
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = (home) => {
    if (this.props.home !== false){
      if (this.props.prevHome[this.props.home]){
        this.props.history.goBack()
      } else  {
        this.props.linkToPage('Route','/'+this.props.home)
      }
    } else {
      this.props.history.goBack()
    }
  }

  componentWillUnmount() {
    if (this.props.home !== false){
      this.props.delHome(this.props.home)
    }
  }


  render() {
    return (
      <button className='back-button' onClick={()=>this.goBack(this.props.home)}>{this.props.children}</button>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  prevHome : articles.home
});

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
    delHome(type){
      dispatch(delHome(type))
    }

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Back));
