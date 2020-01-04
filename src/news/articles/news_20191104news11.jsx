import I1IMG5081 from './assets/IMG_5081.JPG'
import I2IMG5106 from './assets/IMG_5106.JPG'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20191104news11 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 団員募集に関して

### 2020.01.04

既にTwitterなどではアナウンスしておりますが、2019-20シーズンの団員を募集しております。

Orchestra Mµsicart 第2シーズンとなる今回は昨シーズン以上に多くの方に楽しんでいただけるよう努力したいと思います。ただのコンサートじゃない、楽しいコンサート、そして新しいコンサートを目指していきたいと思っておりますので、興味を持って頂けた方は是非ご連絡、ご応募お待ちしております。

詳しくは[団員募集](/join)のページをご覧ください。



![IMG_5081](./assets/IMG_5081.JPG)



![IMG_5106](./assets/IMG_5106.JPG)

初公演の様子

Youtubeで一部公開もしております。こちらもご覧ください。 https://youtu.be/TB_84zmBy8I



Artistic Director K.M.
`
.replace('./assets/IMG_5081.JPG',I1IMG5081)
.replace('./assets/IMG_5106.JPG',I2IMG5106)
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20191104news11;
