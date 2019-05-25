
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class testn2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
## 記事の削除

「記事削除.app」を起動し記事の情報を設定することで，記事の公開を止めることができます。既にある記事を手直しする場合も，一度記事を消した上で再度「記事更新.app」でアップロードし直してください。

※記事を削除したい場合は，その記事で設定したURLが必要です。わからない場合は，「記事検索.app」で記事のタイトルから検索できます。

※一度削除した記事は元に戻せないので気をつけてください。
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default testn2;