import I1IMG20191014181112 from './assets/IMG_20191014_181112.jpg'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20191016news7 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 練馬文化センターでのリハーサル

### 2019.10.15

いよいよ、11月3日の本番まで1ヶ月を切りました。

昨日、10月14日は練馬文化センターでリハーサルがありました。台風の影響で延期になったリハーサルでしたが、本番の舞台を想定した練習ができました。

![IMG_20191014_181112](assets/IMG_20191014_181112.jpg)

ステージセッティングの様子



チケットの予約がまだという方はこちらのURLからお求めください。

https://www.ticketpay.jp/booking/?event_id=23753

皆様と会場で会えるのを楽しみにしております。



Artistic Director K.M.
`
.replace('assets/IMG_20191014_181112.jpg',I1IMG20191014181112)
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20191016news7;
