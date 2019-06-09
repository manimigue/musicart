import React, {Component} from 'react';
import ConcertLogo from '../img/concert2019_logo.png'
import Articles from './Articles'
import Map from './Map'
import log from '../concert/log.json'
import Link from '../components/Link'
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Info from '../components/ticketsInfo'

export default class Concert_2019 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render () {
      return (
        <div className='concertAbout concert2019'>
          <Zoom delay={100} duration={2000}>
            <img className="title-logo" src={ConcertLogo} alt="コンサートロゴ" />
          </Zoom>
          <Flip bottom cascade delay={100} duration={2000}>
            <h3>光と音楽に包まれる、それはまるで魔法のように。</h3>
            <p>オーケストラに光や映像といった演出を加えた新しいコンサート空間への挑戦。</p>
            <p>プログラムは今年没後150年を迎えるエクトル・ベルリオーズをはじめとするフランスの作曲家に焦点を当て、お届けします。ヴァイオリンを持った死神、ヴァルプルギスの夜に集まる魔女等、まさに魔法の世界を音楽で表現した作品の数々、そんな怪しくも美しい作品を光と映像で彩ります。今宵、コンサートホールは魔女の夜宴へと姿を変えるでしょう。</p>
          </Flip>
          <Articles
            title='Program'
            log={log}
            twitter={false}
            type='concert'
            date={false}
            more={true}
            />
          <h4>公演スケジュール</h4>
          <p style={{marginBottom:"0"}}>2019 年 11 月 3 日(日祝)</p><p>18:00 開場, 18:30 開演(20:30 終演予定)</p>
          <h4>アクセス</h4>
          <h5 style={{marginBottom:"12px"}}>森のホール 21 大ホール</h5>
          <p style={{marginBottom:"0"}}>新京成線「八柱駅」・JR 武蔵野線「新八柱駅」</p>
          <p style={{marginBottom:"15px"}}>南口下車後、徒歩約 15 分またはバス(新京成バス 小金原団地循環・バス案内所行、または新松戸駅行約 5 分、「公園中央口」下車、徒歩約 2 分)</p>
          <p style={{marginBottom:"0"}}>※森のホール 21 駐車場は大変混雑いたしますので、なるべく電車・バスをご利用ください</p>
          <p >※自転車及び二輪車でお越しのお客様は駐輪場を御利用ください</p>
          <p >森のホール 21 のホームページは<Link type="a" url="https://www.morinohall21.com/">こちら</Link></p>
          <Map
            title="concert2019"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103656.22389024516!2d139.81812048776266!3d35.71989757693368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018837c8a1e51d5%3A0x44934c52d49d6541!2sHall+of+the+Forest+21+(Matsudo+City+Cultural+Hall)!5e0!3m2!1sen!2sjp!4v1559288431468!5m2!1sen!2sjp"
            />
          <Info />
          <p>詳しくは<Link type="Route" url="/tickets" >チケット情報</Link>をご覧ください</p>
        </div>
    )
  }
}
