
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20190830news6 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# 消費税率変更について

##### 2019.08.29

この度、2019年10月1日からの消費税率引き上げに伴いまして、チケットペイでのシステム利用料が変更になることをお知らせいたします。

9月30日24時頃より、システム利用料がこれまでの324円（8%）から330円（10%）に変更されます。

チケットペイを通してご予約していただくお客様にはお手数おかけしますが、ご確認の程、よろしくお願いします。



Ticket Division (E.T.)
`
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20190830news6;
