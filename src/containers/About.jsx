import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../index.css';
import Twitter from '../components/twitter'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (<div className='about'>
      <h2 className='title'>About Orchestra
        <span className='musicart'>Mμsicart</span>
      </h2>
      <div className='aboutMain'>
        <p>Orchestra Mμsicart（オーケストラ・ミュージカルト）は2018年に「音楽環境つくり」「新制作への挑戦」「アート文化の発展」の三つの理念を掲げて結成されました。</p>
        <h5>
          <em>「音楽環境つくり——これまでも音楽を、これからも音楽を」</em>
        </h5>
        <p>未来の音楽シーンを考える際、「部活動や、サークルで音楽をやっていた人はたくさんいるはずなのに、その人たちは一体どこに」という疑問にぶつかります。どれだけ時間が経ってしまっても、またもう一度という思いがあれば音楽を始められる、そんな環境は残念ながら多くはありません。本団体はこれまで音楽をやっていた人が、これからも音楽を続けられるように、続けたいと思えるように、音楽環境作りに取り組みたいと思います。</p>
        <p>そして、これまで音楽に関わる機会があまりなかった人に向けても扉を開き、音楽人口を増やしていきたいと考えています。</p>
        <h5>
          <em>「新制作への挑戦——新しいコンサートに向けて」</em>
        </h5>
        <p>21 世紀が 始まり20 年が経とうとしている現在、多くのコンサートは聴衆の一方的な享受の場となっており、ホールは舞台と客席が完全に分離された空間となっています。インスタレーションやインタラクティブといった言葉が出回る中、まるで時間が止まったように伝統芸能と化しつつあるコンサートの概念を変えたいと思います。</p>
        <p>音楽を聴覚的にのみ捉えるだけにとどまらず、より全身で、自己意志をもって聴衆が参加し、没入できるコンサートの形態に取り組みたいと思います。</p>
        <h5>
          <em>「アート文化の発展——日々の生活に音楽を」</em>
        </h5>
        <p>クラシックが一部の愛好家が通うだけのコンサートになってしまうと、このままでは絶滅危惧種となるでしょう。そんな未来は近いかもしれません。</p>
        <p>音楽は別に崇高なものではないのです。トレンドについて語るように、CMや映画で気になった音楽について共有する、そんな日々の生活にあふれているはずの音楽を少しでも身近に感じてもらえるように努力します。</p>
        <p>我々はプロではないのです。しかし、プロのコンサートの敷居が高いと感じる人にそこへの階段を作ることはできます。そんなみんなの音楽へのファーストステップを目指したいと思います。</p>
        <p>これら三つの理念をもとに様々な企画、楽曲に取り組み、新しい音楽シーンを作り上げたいと思います。</p>
      </div>
      <Twitter/>
    </div>);
  }
}

const mapStateToProps = ({links}) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(About);
