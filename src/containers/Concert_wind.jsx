import React, {Component} from 'react';
import ConcertLogo from '../img/concert_wind_logo.png'
// import Access from '../img/access1.png'
import Articles from './Articles'
// import Map from './Map'
import log from '../concert_wind/log.json'
import Link from '../components/Link'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// import Info from '../components/ticketsInfo_2'
import {Helmet} from 'react-helmet';

export default class Concert_wind extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  name = "valley_of_the_wind"

    render () {
      // <Map
      //   title="concert2019"
      //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103656.22389024516!2d139.81812048776266!3d35.71989757693368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018837c8a1e51d5%3A0x44934c52d49d6541!2sHall+of+the+Forest+21+(Matsudo+City+Cultural+Hall)!5e0!3m2!1sen!2sjp!4v1559288431468!5m2!1sen!2sjp"
      //   />
      // <img className="access" src={Access} alt="access"/>
      return (
        <div className='concertAbout concertWind'>
          <Helmet>
            <title>風の谷へ</title>
          </Helmet>
          <Zoom delay={100} duration={2000}>
            <img className="title-logo" src={ConcertLogo} alt="コンサートロゴ" />
          </Zoom>
          <Fade clear delay={100} duration={2000}>
            <h3>そして誘われる、風の谷へ</h3>
            <p>今回のプログラムは三鷹に由来したスタジオジブリ特集です。風のホールという名前にぴったりな、「風」をテーマにお届けします。スタジオジブリ作品には多くの風の描写があり、また、風の谷のナウシカや、風立ちぬといった風をテーマにした作品があります。今回の公演のために編曲された音楽は、そんなスタジオジブリ作品の新しい魅力に気がつかせてくれるでしょう。子どもから大人まで魅了するスタジオジブリの世界をお楽しみください。</p>
          </Fade>
          <Articles
            title='Program'
            log={log}
            twitter={false}
            type={'concert/'+ this.name}
            date={false}
            more={false}
            />
          <p>作曲：久石譲 / 構成：前田皓生（芸術監督）</p>
          <h3>公演スケジュール</h3>
          <p>新型コロナウイルス感染拡大防止のため、公演を延期いたします。</p>
          {/* <p style={{marginBottom:"0"}}>2020 年 5 月 9 日(土)</p><p>13:30 開場, 14:00 開演(15:30 終演予定)</p>
          <h3>アクセス</h3>
          <h5 style={{marginBottom:"12px"}}>三鷹市芸術文化センター 風のホール</h5>
          <p style={{marginBottom:"0"}}>JR「三鷹駅」より徒歩約15分または、バス</p>
          <p style={{marginBottom:"15px"}}>2番のりばから乗車「八幡前・三鷹市芸術文化センター前下車」すぐ<br />6・7番のりばから乗車「八幡前」下車１分</p>
          <p style={{marginBottom:"0"}}>※森のホール 21 駐車場は大変混雑いたしますので、なるべく電車・バスをご利用ください</p>
          <p >※自転車及び二輪車でお越しのお客様は駐輪場を御利用ください</p>
          <p >三鷹市芸術文化センターのホームページは<Link type="a" url="http://mitaka-sportsandculture.or.jp/geibun/">こちら</Link></p> 
          <Info /> */}
          <p>詳しくは<Link type="Route" url="/news/20200402news14" >第2回公演延期のお知らせ</Link>をご覧ください</p>
        </div>
    )
  }
}
