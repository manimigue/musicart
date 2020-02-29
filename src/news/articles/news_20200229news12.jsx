import I12nd06 from './assets/concert_wind_logo.png'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20200229news12 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 第2回公演に向けてホームページを更新しました

### 2020.02.29

![ミュージカルト2nd_メインデザイン06](./assets/concert_wind_logo.png)

「Orchestra Mµsicart 第2回公演 Ghibli Collection 風の谷へ」に向けてホームページを更新しました。Concertのページでは、曲目やアクセスなどの公演情報が掲載されております。また、Ticketのページでは、チケットの予約を開始しております。席数に限りがございますので、お早めにご予約ください。



Orchestra Mµsicartでは引き続き、今シーズンの団員の募集を行なっております。詳しくはMemberのページまたは、Contactのフォームからお問い合わせください。



皆様にお会いできる日を楽しみにしております。



Art Director K.M.
`
.replace('./assets/concert_wind_logo.png',I12nd06)
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20200229news12;
