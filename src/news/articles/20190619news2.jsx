
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20190619news2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# チケット予約開始（ホームページ予約第1次）

### 2019.06.20

大変お待たせいたしました、Orchestra Mμsicart 光と魔法のコンサートのチケット予約（ホームページ予約第1次）を開始いたします！

先行予約チケットの概要は以下の通りです。



【先行予約チケット】

⾃由席・⼀部指定席 

一般・学⽣共通 1,000 円 

⼩⼈（中学⽣以下）無料

 

Ticketのページのフォームに入力していただき送信してください。

1週間以内に確認の連絡を送らせて頂きます。

 

松戸市民の方は松⼾フリーチケット（⾃由席・⼀部指定席）がございます。 

松⼾市に在住、在勤、在学の⽅のみ500 枚限定の無料チケットを当⽇先着順でお配りいたしますので、ぜひそちらをご利用くださいませ。

 

また、20 名以上の団体予約に限り、団体専⽤指定席をご案内します。 

こちらに関しましてはOrchestra Mμsicart の公式ホームページのお問い合わせからご連絡ください。



チケットの引き換え、当日チケットの販売は、当日17:30より開始します。当日チケットの枚数は先行予約チケットの状況に応じて変動するため、予めご了承ください。

 本公演では未就学児のゲストの方もご来場して頂くことが出来ます。予めご了承ください。また、未就学児をお連れのゲストの方は演奏中、周りの方にご配慮頂きますようお願いいたします。



それでは、皆様のお越しを団員一同心よりお待ちしております。



Ticket Division E.T.
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20190619news2;
