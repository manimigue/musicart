import I1IMG5083 from './assets/IMG_5083.JPG'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20200104news10 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 新年のご挨拶

### 2020.01.04

あけましておめでとうございます。昨年は松戸市の森のホールで初公演を行い、多くの方に足を運んでいただきました。2020年もより多くの方に音楽を、そして魅力的な舞台を届けられるよう努力していきますので、よろしくお願いします。

![IMG_5083](./assets/IMG_5083.JPG)

昨年のコンサートの様子

コンサートの様子はYoutubeにアップロードされておりますので、是非チェックしてみてください。https://youtu.be/TB_84zmBy8I

今年は5月9日(土)に三鷹市芸術文化センター風のホールにて、第2回公演を行います。テーマは「風」そして「ジブリ」です。三鷹らしいプログラムになっております。是非お楽しみください。（諸事情により、アナウンスしていた内容と異なるプログラムとなりました。）

本年もOrchestra Mµsicartをよろしくお願いします。

Representative N.M.
`
.replace('./assets/IMG_5083.JPG',I1IMG5083)
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20200104news10;
