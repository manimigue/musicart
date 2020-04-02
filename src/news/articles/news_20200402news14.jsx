
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20200402news14 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# Orchestra Mµsicart 第2回公演延期のお知らせ

### 2020.04.03

皆様

2020年3月19日のNewsにおいて、新型コロナウイルス感染拡大防止対策の一環として、練習の自粛、公演内容の縮小等をお知らせしておりましたが、政府の自粛要請を受け、練習自粛の延期並びに公演の延期を決定いたしました。

既にチケットをご予約いただいた皆様、練習見学等を予定されていた皆様にはご迷惑をおかけしますが、ご理解の程よろしくお願いいたします。

尚、練習の再開日、公演の日程に関しましては、決定次第改めてご連絡させていただきます。

Representative N.M.
`
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20200402news14;
