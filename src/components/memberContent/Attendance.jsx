import React from 'react'

const Attendance = (props) => {
  return (
    <React.Fragment>
      <h4>出欠</h4>
      <iframe
        title="Attendance spreadsheet"
        width="400"
        height="200"
        scrolling="no"
        frameBorder="0"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw9gDWIEc4Xt43tVvDB1MVOwVp5Zz5U5ak42Il56aDivl5BLfr9zbA-lFwt_XE0a_bGuzrn4h_YRpv/pubhtml?gid=0&single=true&widget=false&headers=false&chrome=false"
      ></iframe>
    </React.Fragment>
  )
}

export default Attendance
