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
      <div className='concertAbout'>
        <p>光と音楽に包まれる、それはまるで魔法のように。</p>
        <p>オーケストラに光や映像といった演出を加えた新しいコンサート空間への挑戦。</p>
        <p>プログラムは今年没後150年を迎えるエクトル・ベルリオーズをはじめとするフランスの作曲家に焦点を当て、お届けします。ヴァイオリンを持った死神、ヴァルプルギスの夜に集まる魔女等、まさに魔法の世界を音楽で表現した作品の数々、そんな怪しくも美しい作品を光と映像で彩ります。今宵、コンサートホールは魔女の夜宴へと姿を変えるでしょう。</p>
      </div>
      <Articles title='Program Note' log={log} type='concert'/>
    </div>);
};
