import React from 'react'

const Map = (props) => {
  return (
    <div className="Map">
      <iframe src={props.src} title={props.title} width="100%" height="400px" style={{border:0}}></iframe>
    </div>
  )
}

export default Map
