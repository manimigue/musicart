
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class Danse_macabre extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `

`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default Danse_macabre;
