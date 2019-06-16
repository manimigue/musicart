
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class Symphonie_Fantastique extends Component {
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

export default Symphonie_Fantastique;
