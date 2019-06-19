import React,{ Component } from 'react';
import {Helmet} from 'react-helmet';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    const mail = "orchestra.musicart.contact@gmail.com";
    return (
      <div className="contact-form">
        <Helmet>
          <title>Mμsicart お問い合わせ</title>
        </Helmet>
        <h2 className="title">Contact</h2>
        <form method="POST" action={"https://formspree.io/" + mail} >
          <p>お名前</p>
          <input type='text' name='お名前' placeholder="佐藤　太郎" />
          <p>メールアドレス</p>
          <input type="email" name="返信先" placeholder="you@example.com"/>
            <p>件名</p>
            <input type='text' name='件名' />
          <p>お問い合わせ内容</p>
          <textarea name='お問い合わせ内容'></textarea>
          <input className='submit' type="submit" value='Send'/>
        </form>
      </div>
    )
  }
}

export default Contact
