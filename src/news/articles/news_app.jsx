
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_app extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# Orchestra Mµsicart 第2回公演決定のお知らせ

### 2019.06.20

Orchestra Mµsicart 第2回公演のスケジュールが決まりました！

2020年5月9日 (土) 三鷹市芸術文化センター 風のホール

開演時間や曲目に関しては詳細が決まり次第、ホームページ、Twitter等でお知らせいたします。



2019年11月3日 (日祝) に予定している当団の初公演「Orchestra Mµsicart 光と魔法のコンサート in 森のホール21」に続く、第2回公演は一体どんなプログラムになるのでしょうか。制作状況も随時更新していきますので、ホームページ、Twitterをこまめにチェックしてみてください！



Production Division M.A.
`
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_app;
