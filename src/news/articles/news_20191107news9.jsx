import I1R1 from './assets/R1.JPG'
import I2R2 from './assets/R2.JPG'
import I3PB030132 from './assets/R3.JPG'
import I4R3 from './assets/R4.JPG'
import I5PB030146 from './assets/R5.JPG'
import I6o3da287fbdbbe9a8589c87312b194a9c1520468221911060022 from './assets/R6.jpg'
import I7o3da287fbdbbe9a8589c87312b194a9c1520468221911060016 from './assets/R7.jpg'
import I8o3da287fbdbbe9a8589c87312b194a9c1520468221911060004 from './assets/R8.jpg'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_20191107news9 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `


# 光と魔法のコンサート in 森のホール21レポート

### 2019.11.07

先日はOrchestra Mµsicart 光と魔法のコンサート in 森のホール21にお越しいただき誠にありがとうございました。初公演ながら、多くのお客様に足を運んでいただき、無事開催することができました。

今回は、そんな光と魔法のコンサート in 森のホール21の様子をお届けします。

![R1](./assets/R1.JPG)

朝9:00よりホール入り、舞台のセッティングを順次行なっていきます。後ろに見える巨大なスクリーンなスクリーンが今回のコンサートのポイントです。



![R2](./assets/R2.JPG)

舞台のセッティングと並行してスモークの調整を行います。コンサートに必要なライトを綺麗に見せるための準備です。



![PB030132](./assets/R3.JPG)

舞台袖の演出班の様子です。モニターで確認しながら、映像・照明をコントロールします。



![R3](./assets/R4.JPG)

少しずつ舞台の準備を進めていきます。



![PB030146](./assets/R5.JPG)

いよいよ、ゲネプロです。スモークとライト、そして映像が加わり、幻想的なステージになってきました。



そしていよいよ本番です！！

![o3da287fbdbbe9a8589c87312b194a9c1_52046822_191106_0022](./assets/R6.jpg)

死の舞踏から始まりました。



![o3da287fbdbbe9a8589c87312b194a9c1_52046822_191106_0016](./assets/R7.jpg)

牝鹿では、巨大なスクリーンに調理シーンが映し出され、音楽と絶妙な関係を保ちながら進みます。



![o3da287fbdbbe9a8589c87312b194a9c1_52046822_191106_0004](./assets/R8.jpg)

そして幻想交響曲です。



いかがでしたでしょうか。少しでもコンサートの雰囲気を感じて頂ければ、と思います。Orchestra Mµsicart では、2020年に2回のコンサートを予定しております。2019-20シーズンの新しい団員を募集しておりますので、興味を持っていただけた方は是非ご応募ください。



Photo by T.C and Y.N

Artistic Director K.M.
`
.replace('./assets/R1.JPG',I1R1)
.replace('./assets/R2.JPG',I2R2)
.replace('./assets/R3.JPG',I3PB030132)
.replace('./assets/R4.JPG',I4R3)
.replace('./assets/R5.JPG',I5PB030146)
.replace('./assets/R6.jpg',I6o3da287fbdbbe9a8589c87312b194a9c1520468221911060022)
.replace('./assets/R7.jpg',I7o3da287fbdbbe9a8589c87312b194a9c1520468221911060016)
.replace('./assets/R8.jpg',I8o3da287fbdbbe9a8589c87312b194a9c1520468221911060004)
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_20191107news9;
