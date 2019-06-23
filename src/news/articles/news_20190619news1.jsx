
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C20190619news1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# ホームページ開設のお知らせ

### 2019.06.20

Orchestra Mµsicart（オーケストラ・ミュージカルト）公式ホームページを開設しました！

当団は多くの人がクラシックコンサートに足を運びたくなるような、新しいアプローチを目指して2018年に発足しました。これからこのホームページを通じて、当団の活動や、コンサート情報など発信していきたいと思っております。



早速ですが、第1回目となるコンサート「Orchestra Mµsicart 光と魔法のコンサート in 森のホール21」を2019 年11月3日（日祝）に森のホール21大ホールで予定しております。詳しくは [Concert](https://manimigue.github.io/musicart/concert/light_and_magic)をご覧ください。

また、団員・スタッフを引き続き募集しております。こちらに関しては[Join Us](https://orchestramusicart.com/members)をご覧ください。



皆様にお会いできる日を楽しみにしております。



Marketing Division E.Y.
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default C20190619news1;
