
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20191101news8 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# プログラムWeb公開

### 2019.10.31

10月もいよいよ最終日、Orchestra Mµsicart 光と魔法のコンサート in 森のホール 21まで、あと3日となりました。

開演ギリギリに到着されるゲストの方、当日会場に来られないゲストの方のために、Webサイトにて当日配布するプログラムを先行公開します。開場前にホールに来場されたゲストの方もお待ちの間、お手持ちの携帯電話やスマートフォンでご覧になることができます。

プログラムは[こちら](/programs/191103)からご覧ください。

また、Youtubeにてプログラムに載っている譜例が視聴できます。是非聴いてみてください。



《死の舞踏》https://youtu.be/DD2dAhYuTys

《幻想交響曲》https://youtu.be/jxeq6VqxH3o



Artistic Director K.M.
`
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20191101news8;
