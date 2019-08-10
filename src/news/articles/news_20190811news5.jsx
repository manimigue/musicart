
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20190811news5 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# Ticket 追加予約開始

### 2019.08.11

新しくチケットペイでの予約が開始されました。

Ticketsのページにも載っていますが、[こちら](https://www.ticketpay.jp/booking/?event_id=23753)から専用のページにアクセスしていただくことができます。

初めての方は会員登録（無料）が必要になりますが、事前に決済、チケットを引き換えができるので、当日の入場がスムーズになります。

当日チケットカウンターは混雑されることが予想されます。会場に到着するのがギリギリになるという方、事前に決済しておきたいという方は、こちらのチケットペイでのお求めが便利です。是非ご活用ください。

チケットペイに関しては[こちら](https://www.ticketpay.jp/support_page.php?id=7)をご確認ください。

※システム手数料として別途324円（税込）がかかります。

※決済後のキャンセル、払い戻しはできませんので、予めご了承ください。



Ticket Division E.T.
`
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20190811news5;
