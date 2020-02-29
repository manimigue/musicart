import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';
import { Search, Cancel } from '@material-ui/icons';
import Button from 'react-bootstrap/Button';
import Twitter from '../components/twitter';
import { saveStart, saveTag, saveHome} from '../actions/articlesAction'

class Articles extends Component {
  static defaultProps = {
    range: false,
    tags: false,
    twitter : true,
    date : true,
    more : false
  }

  constructor(props) {
    super(props);
    this.listRef = React.createRef()
    this.state = {
      start : props.start[props.type],
      selectedTag : props.selectedTag[props.type],
      tagDisp : props.tagDisp[props.type],
      logPart : (props.logPart[props.type] === null ? props.log : props.logPart[props.type]),
      listTag : true
    }
    if (props.range !== false) {
      for (var i = 0; i < props.range; i++) {
        this[`tagRef${i}`] = React.createRef()
      }
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

    this.state.logSlice = this.state.logPart.slice(this.state.start,this.state.end);

  }

  setSlice = (start, end, logPart) => {
    this.setState({
      logSlice : logPart.slice(start,end),
      listTag : true
    })
  }

  first = (range, logPart=this.state.logPart) => {
    this.setState({
      start: 0,
      end: range
    })
    this.setSlice(0, range, logPart)
  }

  previous = (start, range) => {
    this.setState({
      end: start,
      start: start - range
    })
    this.setSlice(start-range, start, this.state.logPart)
  }

  next = (end, range) => {
    this.setState({
      start: end,
      end: end + range,
    })
    this.setSlice(end, end+range, this.state.logPart)
  }

  toUrl = (url, range, logPart) => {
    const index = logPart.findIndex((l) => {
      return l.url === url
    })
    const start = Math.floor(index / range) * 5;
    this.setState({
      start,
      end: start+range
    })
    this.setSlice(start, start+range,logPart)
  }

  selectTag = (tag, range, selectedTag, toFirst=true,url=null) => {
    const nTag = tag === selectedTag ? null : tag;
    const logPart = nTag !== null ?
     this.props.log.filter(l => l.tag.includes(nTag)) :
     this.props.log;

    this.setState({
      selectedTag: nTag,
      logPart: logPart
    })
    if (toFirst || url === null){
      this.first(range, logPart)
    } else {
      this.toUrl(url, range, logPart)
    }

    ReactGA.event({
      category : 'Tag',
      action : nTag
    })
  }

  switchTagDisp = (tagDisp) => {
    this.setState({
      tagDisp: !tagDisp
    });
  }

  initializeTag = (range) => {
    this.setState({
      selectedTag: null,
      logPart: this.props.log,
      tagDisp: false
    });
    this.first(range,this.props.log)
  }

  linkToArticle = (url, type) => {
    if (url !== null){
      this.props.linkToPage('Route','/' +type +'/' + url);
      this.props.saveHome(type)
    }
  }

  componentDidMount() {
    if (this.props.tags !== false){
      const listWidth = this.listRef.current.offsetWidth
      if (this.state.listTag){
        for (var i = 0; i < this.state.logSlice.length; i++) {
          try {
            if (listWidth-this[`tagRef${i}`].current.offsetWidth < 170){
              this.setState({ listTag : false })
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tags !== false){
      const listWidth = this.listRef.current.offsetWidth
      if (this.state.listTag){
        for (var i = 0; i < this.state.logSlice.length; i++) {
          try {
            if (listWidth-this[`tagRef${i}`].current.offsetWidth < 170){
              this.setState({ listTag : false })
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }

  componentWillUnmount() {
    this.props.saveStart(this.state.start, this.props.type)
    this.props.saveTag(this.state.selectedTag, this.state.tagDisp, this.state.logPart, this.props.type)
  }



  render() {
    const {type, title, range, tags, date, more} = this.props;
    const {start, end, prevBut, nextBut, selectedTag, tagDisp, logSlice, listTag} = this.state;

    const lists = logSlice.map((article, i) => {
      const articleTags = tags !== false &&  listTag ?
        article.tag.map(tag => {
          const tagSelector = (
            <Button
              className='tagSelector'
              variant={tag === selectedTag ? "secondary" : "outline-secondary"}
              onClick={()=>this.selectTag(tag, range, selectedTag,false,article.url)}
              key={article.url + tag}
            >
              #{tag}
            </Button>
          )
          return tagSelector
        })
        : null;

      const tagDiv = <div display="inline-block" className="tagDiv" key={i} ref={this[`tagRef${i}`]}>{articleTags}</div>

      return (
        <li key={article.url} className='article-list' style={{cursor:"pointer"}}>
          <div　className='article-list-title'>
            <button
            key={article.url+'button'}
            onClick={()=>this.linkToArticle(article.url,type)}
            >
              <h3 key={article.url+'h2'} className='article-title'>{article.title}</h3>
            </button>
          </div>
          { date ?
            <div><div key={article.url+'p'} className='article-date' onClick={()=>this.linkToArticle(article.url,type)}><span>更新日:{article.date}</span></div>{tagDiv}</div>
           : null
          }
          {
            more ?
            <div key={article.url+'more'} className='article-more'><button onClick={()=>this.linkToArticle(article.url,type)}>…read more</button></div>
             : null
          }
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
          &#8249; 戻る
        </Button>
        <Button
          className="articleFirst"
          variant="secondary"
          style={{display : start!==0 ? 'inline-block' : 'none'}}
          onClick={()=>this.first(range)}
        >
          &laquo; 最新へ
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
        style={{textAlign:"center"}}
      >
        <Search />
      </Button>
    ) :
    null;

    const tagSelectors = tags !== false ? (
      tags.map(tag => {
        return (<Button
          className='tagSelector tagSelector-main'
          variant={tag === selectedTag ? "secondary" : "outline-secondary"}
          onClick={()=>this.selectTag(tag, range, selectedTag)}
          key={tag}
        >
          #{tag}
        </Button>)
      }).concat(
        [<Button
          className='tagSelector tagSelector-main'
          variant="secondary"
          onClick={()=>this.initializeTag(range)}
          key="null"
        >
          <Cancel />
        </Button>]
      )
    ) : null;

    return (
      <div className={"articleSec articleSec-"+type}>
        <h2 className='title'>{title}{tagSearch}</h2>
        <Fade right collapse when={tags !== false && tagDisp !== false} children={<div>{tagSelectors}</div>} duration={2000}/>
        <ul className='articles' ref={this.listRef}>{lists}</ul>
        {button}
        <br/>
        {this.props.twitter ? <Twitter /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  start: articles.start,
  selectedTag: articles.selectedTag,
  tagDisp: articles.tagDisp,
  logPart: articles.logPart,
  home: articles.home
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
    },
    saveHome(type){
      dispatch(saveHome(type))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
