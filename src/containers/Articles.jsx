import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from 'react-bootstrap/Button';
import Twitter from '../components/twitter';
import { saveStart, saveTag } from '../actions/articlesAction'

class Articles extends Component {
  static defaultProps = {
    range: false,
    tags: false
  }

  constructor(props) {
    super(props);
    this.state = {
      start : props.start[props.type],
      selectedTag : props.selectedTag[props.type],
      tagDisp : props.tagDisp[props.type],
      logPart : (props.logPart[props.type] === null ? props.log : props.logPart[props.type])
    }
    if (props.range !== false) {
      if (this.state.start < props.range){
        this.state.prevBut = false;
      } else {
        this.state.prevBut = true;
      }

      this.state.end = this.state.start+props.range;

      if (this.state.end >= this.state.logPart.length){
        this.state.nextBut = false;
      } else {
        this.state.nextBut = true;
      }

    } else {
      this.state.nextBut = false;
      this.state.end = this.state.logPart.length;
    }

    if (props.tags !== false){

    }
  }

  first = (range) => {
    this.setState({
      start: 0,
      end: range
    })
  }

  previous = (start, range) => {
    this.setState({
      end: start,
      start: start - range
    })
  }

  next = (end, range) => {
    this.setState({
      start: end,
      end: end + range,
    })
  }

  selectTag = (tag, range, selectedTag) => {
    const nTag = tag === selectedTag ? null : tag;
    const logPart = nTag !== null ?
     this.props.log.filter(l => l.tag.includes(nTag)) :
     this.props.log;

    this.setState({
      selectedTag: nTag,
      logPart: logPart
    })

    this.first(range)
  }

  switchTagDisp = (tagDisp) => {
    this.setState({
      tagDisp: !tagDisp,
      selectedTag: null,
      logPart: this.props.log
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.range !== false){
      if (nextState.start < nextProps.range){
        if (nextState.prevBut){
          this.setState({prevBut:false})
        }
      } else {
        if (!nextState.prevBut){
          this.setState({prevBut:true})
        }
      }
      if (nextState.end >= nextState.logPart.length){
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
    this.props.saveTag(this.state.selectedTag, this.state.tagDisp, this.state.logPart, this.props.type)
  }

  render() {
    const {type, title, range, tags} = this.props;
    const {start, end, prevBut, nextBut, selectedTag, tagDisp, logPart} = this.state;

    const logSlice = logPart.slice(start,end);

    const lists = logSlice.map(article => {
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
          className='articleFirst'
          variant="secondary"
          style={{display : start!==0 ? 'block' : 'none'}}
          onClick={()=>this.first(range)}
        >
          &laquo; 最新へ
        </Button>
        <Button
          className='articlePrev'
          variant="dark"
          style={{display : prevBut ? 'block' : 'none'}}
          onClick={()=>this.previous(start,range)}
        >
          &#8249; 戻る
        </Button>
        <Button
          className='articleNext'
          variant="dark"
          style={{display : nextBut ? 'block' : 'none'}}
          onClick={()=>this.next(end,range)}
        >
          次へ &#8250;
        </Button>
      </div>
    )
    : null;

    const tagSearch = tags !== false ?
    (
      <Button
        className='tagSearch'
        onClick={() => this.switchTagDisp(tagDisp)}
      >
        タグ検索
      </Button>
    ) :
    null;

    const tagSelectors = tags !== false && tagDisp !== false ?
    (
      tags.map(tag => {
        return (<Button
          className='tagSelector'
          variant={tag === selectedTag ? "secondary" : "outline-secondary"}
          onClick={()=>this.selectTag(tag, range, selectedTag)}
          key={tag}
        >
          {tag}
        </Button>)
      })
    )
    : null;


    return (
      <div>
        <h2 className='title'>{title}</h2>
        {tagSearch}
        {tagSelectors}
        <ul className='articles'>{lists}</ul>
        {button}
        <Twitter />
      </div>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  start: articles.start,
  selectedTag: articles.selectedTag,
  tagDisp: articles.tagDisp,
  logPart: articles.logPart
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
    },
    saveTag(selectedTag, tagDisp, logPart, type){
      dispatch(saveTag(selectedTag, tagDisp, logPart, type))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
