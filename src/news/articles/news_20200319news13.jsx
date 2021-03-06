
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20200319news13 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 新型コロナウイルス感染予防・拡大防止策に関して

### 2020.03.18

皆様

新型コロナウイルスをはじめとする感染予防、拡大防止策に関してOrchestra Mµsicartでは以下の措置を取らせていただきます。



- 3月の練習中止（3月21日・3月28日）
- コンサート内容の縮小（曲目の変更）



 既にチケットをご予約のお客様、練習見学を希望されていた方には大変申し訳ありませんが、ご理解とご協力の程よろしくお願いいたします。

 また、今後の社会状況、政府からの要請によっては、公演の中止・延期、または内容を変更してお届けする形となります。こちらも合わせてご理解の程、よろしくお願いいたします。
`
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20200319news13;
