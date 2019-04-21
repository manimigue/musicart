import I0 from 'assets/スクリーンショット 2019-04-13 22.55.51.png'
import I1 from 'assets/スクリーンショット 2019-04-13 23.10.07.png'
import I2 from 'assets/スクリーンショット 2019-04-13 23.14.33.png'
import I3 from 'assets/スクリーンショット 2019-04-14 21.45.37.png'
import I4 from 'assets/スクリーンショット 2019-04-14 22.39.24.png'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class settings extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
## 初期設定

1. Xcodeをインストール

   App StoreからXcodeを検索しインストール。

   ![スクリーンショット 2019-04-13 22.55.51](./assets/スクリーンショット 2019-04-13 22.55.51.png)

2. GitHubに登録

   <https://github.com/join>にてGitHubに登録します。

   1. ユーザーネーム，メールアドレス，パスワードを設定

      ![スクリーンショット 2019-04-13 23.10.07](./assets/スクリーンショット 2019-04-13 23.10.07.png)

   2. Freeのアカウントを選択

      ![スクリーンショット 2019-04-13 23.14.33](./assets/スクリーンショット 2019-04-13 23.14.33.png)

   3. いくつか質問に答える(スキップ可)

   4. アカウント確認メールが届くので，「Verify email address」を押して登録を終える。

3. GitHubアカウント設定

   1. 初期設定フォルダ内の「設定１.app」を起動し，指示に従ってGitHubの情報を設定します。

      以下の画面が出たら「インストール」をクリックしてください。

      ![スクリーンショット 2019-04-14 21.45.37](./assets/スクリーンショット 2019-04-14 21.45.37.png)

   2. 「SSH-KEYがコピーされました」と表示されたら，そのSSH-KEYをGitHubに登録します。

      1. https://github.com/settings/ssh/newにてSSH-KEYを登録します。

         既にSSH-KEYはコピーされているので，Key欄にペーストしてください。Titleは'SSH'など，適当で構いません。

         ![スクリーンショット 2019-04-14 22.39.24](./assets/スクリーンショット 2019-04-14 22.39.24.png)

      2. 「Add SSH key」を押して登録を完了します。

   3. GitHubに必要な設定は一旦これで終わりです。管理者からメールで返信があるまでお待ちください。

4. ウェブサイト情報をダウンロードします。

   1. 管理者から設定が完了したメールが届いたら，「設定２.app」を起動し指示に従って入力していってください。

### 設定完了

ここまで終われば全ての設定は完了です！

記事の更新には更新フォルダ内の「新しい記事の作り方」を参照してください。
`
    return(
      <MarkdownRender className='article news' source={source} escapeHtml={false}/>
    )
  }
}

export default settings;
