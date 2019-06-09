import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onConcert, outConcert} from '../actions/concertAction'

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
