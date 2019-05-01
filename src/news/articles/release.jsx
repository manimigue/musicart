
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class release extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# News第1弾
## Home Pageを開設

 ホームページを開設しました！！
コンサート情報、活動について、メンバー募集など随時更新予定です。

Orchestra Mμsicartは、多くの人がクラシックコンサートに足を運びたくなるような、新しいアプローチを目指して、2018年に発足しました。
 第1回コンサートは、11/3に森のaホール21 大ホールで予定しています。

 まだまだ団員も募集中です。詳しくは、[Join Us](https://manimigue.github.io/musicart/members)ページをご覧ください。
共にオーケストラを楽しみましょう！
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default release;
