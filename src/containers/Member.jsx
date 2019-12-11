import React from 'react'
import MemberHeader from '../components/MemberHeader'
// import log from '../member/log.json';
// import tags from '../member/tag.json';
// import Articles from './Articles'

import '../static/css/member.css';

class Member extends React.Component {
  state = {
    currentUserName : '',
    // currentUserMail : ''
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserName : idToken.idToken.claims.name,
      // currentUserMail : idToken.idToken.claims.email
    })
  }

  render () {
    const { currentUserName } = this.state;
    console.log(this.state);
    console.log(JSON.parse(localStorage.getItem('okta-token-storage')));
    return(
      <div>
         <MemberHeader userName={currentUserName} />
         <div className='memberContent'>
         </div>
      </div>
    )
  }
}

export default Member;
