
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20190619news3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 団員・スタッフ募集に関して

### 2019.06.20

Orchestra Mµsicart 光と魔法のコンサート in 森のホール21に向けて、団員の追加募集、そしてスタッフを募集いたします。団員の募集パートに関しては以下の通りです。

追加募集するパート
・オーボエ 1名
・トランペット 1名
・チューバ 1名
・ヴァイオリン 2名
・ヴィオラ 2名
・チェロ 2〜3名
・コントラバス 2名

詳しくは Join us のページをご覧ください。

また、当日のレセプション・ステージスタッフを募集いたします。こちらも詳しくは Join us のページをご覧ください。



Artistic Director K.M.
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20190619news3;
