
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class test2m extends Component {
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

export default test2m;
