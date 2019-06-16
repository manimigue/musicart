
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class t4m extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
# ヴァルプルギスの夜と幻想交響曲

##### 2019.04.30

皆さん、ヴァルプルギスの夜はご存知でしょうか。ゲーテの『ファウスト』を読んだことがある方はご存知かと思いますが、今日はそんなヴァルプルギスの夜と《幻想交響曲》の関係について少しご紹介します。



######ヴァルプルギスの夜とは

ヴァルプルギスの夜とは5月1日の前の晩に魔女たちがブロッケン山に集まり、どんちゃん騒ぎをするというもので、ヴァルプルギスとは疫病と魔法に対して人間を護る神のことです。このブロッケン山とはドイツにあります。

ゲーテの『ファウスト』ではメフィストーフェレスがこのように言っています。

*押し合い圧合い、せいたり、がなったり、しゅっしゅっいったり、渦を巻いたり、引っ張ったり、無駄口を叩いたり、光ったり、きらめいたり、臭気を発する、燃えもする。これがほんとの魔女騒ぎだ。*（ファウスト 第一部 ゲーテ / 高橋義孝訳） 



###### 『ファウスト』とベルリオーズ

ベルリオーズはゲーテのファウストに非常に影響を受けており、それは《ファウストの八つの情景》(1828)《ファウストの劫罰》(1845-46) といった作品に見られます。そして《幻想交響曲》の第5楽章 〈サバトの夜の夢 Songe d’une Nuit du Sabbat〉もまた、このファウストから影響を受けたと言えます。原題にあるサバトとは魔女の夜宴を意味しており、ここではヴァルプルギスの夜を指しているとされています。

ベルリオーズは《幻想交響曲》のプログラムノート（第3稿）の中で次のように記しています。

*あれは彼女だ、彼女がサバトにやってきたのだ。*（ベルリオーズとその時代 W. デームリング / 池上純一訳）



《幻想交響曲》は若い音楽家が愛した女性を殺してしまい、その彼女がサバトに現れるという物語ですが、このサバトに愛した女性が現れるというのも、実は『ファウスト』に影響を受けていると思われます。

*ファウスト「君、向こうに色蒼ざめた、きれいな子が一人ぼっちで立っているのが見えるだろう。ひどくゆっくり動いているところを見ると、両足が鎖で縛られているのではないかな。どうも己にはあの子が、可愛いグレートヒェンに似ているように思われてならないのだが。」*（ファウスト 第一部 ゲーテ / 高橋義孝訳） 



『ファウスト』ではファウストがヴァルプルギスの夜にブロッケン山で愛するグレートヒェンの姿を目撃します（メフィストーフェレスには幻だと言われてしまいますが）。この描写はサバトの中に愛した女性を見出した《幻想交響曲》の物語と重なるものがあると思いませんか。



###### 最後に

このように、今日はヴァルプルギスの夜と『幻想交響曲』の関係について少しだけご紹介しました。『ファウスト』が気になった方は是非、読んでみてください。きっと《幻想交響曲》が何倍も楽しくなるはずです。

ちなみに現在もドイツの各地では4月30日から5月1日にかけてヴァルプルギスの夜のお祭りをするそうです。一度は行ってみたいですね。

（前田皓生）
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default t4m;