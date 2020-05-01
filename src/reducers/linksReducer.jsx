// import * as types from '../actions/links';
import React from 'react';
import OrchestrImage from '../img/member01.png'
import ArtistImage from '../img/member03.png'
import ConcertImage from '../img/member02.png'

const initialState = {
  headerLinks:[
    {
      type: 'Route',
      url : '/news',
      text : 'News'
    },
    {
      type: 'Route',
      url: '/stayHome',
      text: 'Stay Home'
    },
    {
      type: 'Route',
      url : '/about',
      text : 'About'
    },
    {
      type: 'Route',
      url : '/concert/home',
      text : 'Concert'
    },
    {
      type: 'Route',
      url : '/tickets',
      text : 'Tickets'
    },
    {
      type:'Route',
      url: '/join',
      text : 'Join us'
    },
    {
      type: 'Route',
      url : '/contact',
      text : 'Contact'
    },
    {
      type: 'Route',
      url : '/member',
      text : 'Member'
    },
    {
      type: 'Route',
      url : '/',
      text : 'Home'
    },
  ],
  membersLinks:[
    {
      type: 'Route',
      url : '/contact',
      tab : 'Orchestra',
      head: 'オーケストラ',
      icon: 'music_note',
      sub: 'Orchestra Member',
      img: OrchestrImage,
      text : <div>
        <p>Orchestra Mμsicart では演奏会毎に新規団員を募集しております。<br/>楽器にブランクがある方、初心者という方もお気軽にご連絡ください。</p>
        <h5>募集パート</h5>
        <ul>
          <li>ファゴット 若干名</li>
          <li>トランペット 1名</li>
          <li>チューバ 1名</li>
          <li>パーカッション 若干名</li>
          <li>ヴァイオリン</li>
          <li>ヴィオラ</li>
          <li>チェロ</li>
          <li>コントラバス （楽器貸出有り）</li>
        </ul>
        <p>募集パートは随時変更します。詳しくは当団のTwitter（@orch_musicart）をご覧ください</p>

        <h5>活動内容及び練習日程</h5>
        <p>年1～2回の演奏会<br/>土日を中心に月1～3回程度の練習</p>

        <h5>練習場所</h5>
        <p>練馬・杉並・新宿・豊島エリア</p>

        <h5>団費</h5>
        <p>年会費1万円<br />演奏会参加費2万円 / 回（演奏会の予算によっては若干前後する可能性はあります）</p>

        <h5>募集要項</h5>
        <p>下記の全てに該当する方</p>

        <p><input type='checkbox' /> 原則18歳以上（高校生不可）※年齢に上限はありません</p>

        <p><input type='checkbox' /> 団の活動方針を理解し、団運営においても協力できる方</p>

        <p><input type='checkbox' /> 様々な背景を持つ団員と協調できる方</p>

        <p><input type='checkbox' /> オーケストラ楽器経験者、或いは楽器未経験者（未経験者は応相談）</p>

        <p><input type='checkbox' /> 自分で楽器を持っている方（コントラバス、打楽器、特殊楽器に関しては応相談）</p>

        <p><input type='checkbox' /> ゲネプロ本番を含む必要最低限の練習に参加できる方</p>

        <p><input type='checkbox' /> 自身の演奏技術の向上に前向きな方</p>


        <p>その他のパートも状況に応じて募集いたしますので、まずはご連絡ください。</p>
      </div>,
      background : 'rgba(228, 89, 45, 0.59)',
      color : 'rgb(212, 62, 6)'
    },
    {
      type: 'Route',
      url : '/contact',
      tab : 'Artist',
      head: 'アーティスト',
      icon: 'brush',
      sub: 'Artist',
      img: ArtistImage,
      text : <div>
        <p>Orchestra Mμsicart では一緒に作品を作り上げるあらゆるジャンルのアーティストを募集しています。</p>
        <ul>
        <li>グラフィックデザイン</li>
        <li>3Dデザイン</li>

        <li>映像</li>

        <li>照明</li>

        <li>音響</li>
        <li>プログラミング</li>

        <li>舞台道具（大道具、小道具等）</li>

        <li>コンテンポラリーアート</li>

        <li>インスタレーション</li>

        <li>ファッションデザイン</li>

        <li>ヘアメイク　等</li>

        </ul>

        <ol>
          <li><p>活動内容及び練習日程</p>
          <ul>
          <li>年1～2回の演奏会</li>
          <li>土日を中心に月1～3回程度の練習</li>

          </ul>
          <p>※原則月1～2回程度の練習、本番直前は調整あり。練習日程は2ヶ月前を目処に月毎に通達。</p>
          <p>※打ち合わせに関しては必要に応じて調整、基本はリモートワーク</p>
          <h5>練習場所</h5>
          <p>練馬・杉並・新宿・豊島エリア</p>
          </li>

          <li><p>募集要項</p>
            <p>下記に該当する方</p>
            <p><input type='checkbox' /> 本団体の活動理念に理解のある方</p>

            <p><input type='checkbox' /> 18歳以上（高校生不可）※年齢に上限はありません</p>

            <p><input type='checkbox' /> 様々な背景を持つ団員，スタッフと協調できる方</p>

            <p><input type='checkbox' /> ゲネプロ本番を含む必要最低限の練習，打ち合わせに参加できる方</p>

            <p><input type='checkbox' /> 自身の技術の向上に前向きな方</p>

            <p><input type='checkbox' /> 未経験者であっても習得意欲のある方</p>
          </li>
        </ol>
        <p>状況によって募集内容は変更いたします。予めご了承ください。まずはお気軽にご連絡ください。</p>

      </div>,
      background : 'rgba(131, 195, 123, 0.86)',
      color : 'rgb(18, 121, 5)'
    },
    {
      type: 'Route',
      url : '/contact',
      tab : 'Concert Staff',
      head: 'スタッフ',
      icon: 'people',
      sub: 'Concert Staff',
      img: ConcertImage,
      text : <div>
        <p>Orchestra Mμsicart では一緒にコンサートを作り上げるスタッフを募集しています。</p>
        <ul>
          <li>フロアスタッフ</li>
          <li>ステージスタッフ</li>
        </ul>
        <ol>
          <li><p>業務内容</p>
            <ul>
              <li><p>年1〜2回の演奏会でのコンサートスタッフ</p>
                <p>※打ち合わせに関しては必要に応じて調整、基本は当日の会場での業務</p>
              </li>
              <li><p>フロアスタッフ</p>
                <p>当日チケットの販売、プログラムの配布、ゲスト誘導などレセプション業務を中心に行って頂きます。コンサートにおいて最初にゲストの方を迎えるのはフロアスタッフです。開演前にゲストの方のワクワクを最大限まで引き出す大切なお仕事です。</p>
              </li>
              <li><p>ステージスタッフ</p>
                <p>当日の舞台セット、進行管理などステージ業務を中心に行って頂きます。Orchestra Mμsicartでは様々な演出を想定しているため、演奏者とステージスタッフの連携が必要不可欠になります。最高のステージを作りあげるための大切なお仕事です。</p>
              </li>
            </ul>
          </li>
          <li><p>勤務地・給与</p>
            <ul><li>コンサートに応じて変動</li></ul>
          </li>
          <li><p>募集要項</p>
            <p><input type='checkbox' /> 本団体の活動理念に理解のある方</p>

            <p><input type='checkbox' /> 18歳以上（高校生不可）※年齢に上限はありません</p>

            <p><input type='checkbox' /> 様々な背景を持つ団員，スタッフと協調できる方</p>

            <p><input type='checkbox' /> ゲネプロ本番を含む必要最低限の練習，打ち合わせに参加できる方</p>

            <p><input type='checkbox' /> コンサート業務に携わったことのある方，または未経験でも意欲のある方</p>

          </li>

        </ol>

        <p>状況によって募集内容は変更いたします。予めご了承ください。まずはお気軽にご連絡ください。</p>
      </div>,
      background : 'rgb(105, 115, 177)',
      color : 'rgb(27, 45, 158)'
    },
  ],
};

function linksReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linksReducer;
