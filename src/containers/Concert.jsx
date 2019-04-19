import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConcertLogo from '../img/concert2019_logo.png'
import {onConcert, outConcert} from '../actions/concertAction'
import Articles from './Articles'
import log from '../concert/log.json'

class Concert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onConcert()
    window.scrollTo(0, 0)
  }



  componentWillUnmount() {
    this.props.outConcert()
  }
  render() {
    return(
      <React.Fragment></React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onConcert() {
    dispatch(onConcert())
  },
  outConcert() {
    dispatch(outConcert())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Concert);
export const Concert_home= () => {
  return(
    <div className='concert'>
      <img src={ConcertLogo} alt='コンサートロゴ'/>
      <Articles title='Program Note' log={log} type='concert'/>
    </div>);
};
