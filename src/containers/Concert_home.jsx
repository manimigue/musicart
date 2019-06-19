import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Concert_home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const links = this.props.concerts.map(con => {
      return (
        <div key={con.title} className="concertLink col-xs-6 col-sm-12 col-md-12 col-lg-6">
          <h5>{con.title}</h5>
          <img
            src={con.img}
            alt={con.alt}
            onClick={
              con.link ?
              () => this.props.linkToPage('Route',`/concert/${con.url}`) :
              null
            }
            style={con.link ? null : {cursor:'auto'}}
            />
        </div>
      )
    })
    return (
      <div className='concert'>
        <h2 className='title'>Concerts</h2>
        <div className='concertLinks'>
          {links}
        </div>
      </div>)
  }
}

const mapStateToProps = ({concert}) => ({
  concerts: concert.concerts
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

export default connect(mapStateToProps, mapDispatchToProps)(Concert_home);
