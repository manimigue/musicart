import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from 'react-bootstrap/Button';
import Twitter from '../components/twitter';
import { saveStart } from '../actions/articlesAction'

class Articles extends Component {
  static defaultProps = {
    range: false
  }

  constructor(props) {
    super(props);
    this.state = {
      start : props.start[props.type]
    }
    if (this.state.start < props.range){
      this.state.prevBut = false;
    } else {
      this.state.prevBut = true;
    }
    if (props.range !== false) {
      this.state.end = this.state.start+props.range;
      if (this.state.end >= props.log.length){
        this.state.nextBut = false;
      } else {
        this.state.nextBut = true;
      }
    } else {
      this.state.nextBut = false;
      this.state.end = props.log.length;
    }
  }


  next = (end, range) => {
    this.setState({
      start: end,
      end: end + range,
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if ((nextProps.range !== false) && (nextState.prevBut || nextState.nextBut)){
      if (nextState.start < nextProps.range){
        if (nextState.prevBut){
          this.setState({prevBut:false})
        }
      } else {
        if (!nextState.prevBut){
          this.setState({prevBut:true})
        }
      }
      if (nextState.end >= nextProps.log.length){
        if (nextState.nextBut){
          this.setState({nextBut:false})
        }
      } else {
        if (!nextState.nextBut){
          this.setState({nextBut:true})
        }
      }
    }
  }

  componentWillUnmount() {
    this.props.saveStart(this.state.start, this.props.type)
  }
  previous = (start, range) => {
    this.setState({
      end: start,
      start: start - range
    })
  }


  render() {
    const {log, type, title, range} = this.props;
    const {start, end, prevBut, nextBut} = this.state;
    const logPart = log.slice(start,end)

    const lists = logPart.map(article => {
      return (
        <li key={article.url}>
          <button
          key={article.url+'button'}
          className='article-list'
          onClick={()=>this.props.linkToPage('Route','/' +type +'/' + article.url)}
          >
            <h3 key={article.url+'h2'} className='article-title'>{article.title}</h3>
            <p key={article.url+'p'} className='article-date'>更新日:{article.date}</p>
          </button>
        </li>
      );
    });
    const button = nextBut || prevBut ?
    (
      <div className='articleButton' height='50px'>
        <Button
          className='articlePrev'
          variant="dark"
          style={{display : prevBut ? 'block' : 'none'}}
          onClick={()=>this.previous(start,range)}
        >
          &#8249;
        </Button>
        <Button
          className='articleNext'
          variant="dark"
          style={{display : nextBut ? 'block' : 'none'}}
          onClick={()=>this.next(end,range)}
        >
          &#8250;
        </Button>
      </div>
    )
    : null;
    return (
      <div>
        <h2 className='title'>{title}</h2>
        <ul className='articles'>{lists}</ul>
        {button}
        <Twitter />
      </div>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  start: articles.start
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
    saveStart(start, type){
      dispatch(saveStart(start, type))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
