
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class Symphonie_Fantastique extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
    <p>〈作曲経緯に関して〉</p>
    <p>	エクトル・ベルリオーズHector Berlioz（1803-1869）によって作曲された《幻想交響曲 <em>Symphonie fantastique</em>》が初演されたのは1830年である。この作品が取り上げられる際、多くの場合、この1830年という年がベートーヴェンが亡くなってわずか3年後であるということに触れるが、これはそれまでの作品に対して、この作品が非常に革新的であり、音楽史において重要な位置付けにあることが一つの要因と考えられる。ベルリオーズはこの作品を作曲する数年前にフランソワ・アブネック指揮によるベートーヴェンの作品を聴いたとされ、そこから刺激を受けたとされており、実際、この作品にはベートーヴェンの継承的要素も見られる。しかしながら、この作品はそれまでの交響曲の枠には収まりきらず、非常に奇抜で型破りな作品である。</p>
    <p>　この作品の特色を述べる前に、作曲の経緯について触れる必要があるだろう。初演から3年前の1827年9月、当時パリ音楽院の学生であったベルリオーズはシェイクスピア劇団の女優ハリエット・スミッソン（Harriet Smithson 1800-1854）に夢中になってしまう。スミッソンへ度重なるアプローチをするも報われず、いつしか孤独感からベルリオーズの想いは作中で復讐を企てるほどにまで憎しみへと変わっていった。</p>
    <p>　ここまでが1829年までに起こったことであり、この作品を作曲することとなった直接的な動機である。しかし、一方で実際の作曲期間である1830年にはベルリオーズに心境の変化が起こっており、1829年2月から1830年4月には別の相手であるピアニストのマリー・モーク（Marie Moke 1811-1875）に恋心を抱いている。結果としてこの恋も失敗に終わるが、この年12月にアブネックによって初演されたこの作品は成功を収めた。1832年の再演時にはスミッソンも会場に訪れており、ベルリオーズの恋心はスミッソンとの再会によって再燃、翌年1833年には結婚するまでに至った。</p>
    <br/>
    <p>〈作品の特徴に関して〉</p>
    <p>　この作品の特色に関して述べられる際、しばしば引用されるのが固定楽想、あるいは固定観念（イデー・フィクス idée fixe）の使用である。固定楽想とは、楽器配置、リズムを変えて作中で度々現れるスミッソンと結びついた主題であり、後の特定の人物や状況などと主題を結びつけるワーグナーのライトモティーフに繋がるとされる。</p>
    <p>　また、この作品の革新的な要素の一つとして、変則的とも言える管弦楽法が挙げられる。トランペット2本にコルネットが2本加えられ、今日ではしばしばテューバで代用されるが、オフィクレイドが2本、ティンパニ奏者が4人、さらに弦を弓の毛ではなく、背の部分で叩くコル・レーニョ奏法などが用いられている。これらの手法は当時、非常に革新的であったと言える。加えて、今日では舞台上で行われることもあるが、3楽章のオーボエ、5楽章で用いられる鐘は、楽譜には舞台裏で演奏するように指定されている。これは当時オペラの分野では当たり前であった空間的表現をこの作品に取り込もうとするベルリオーズの試みである。</p>
    <p>　以上のようなベルリオーズの創作上の試みによって、この作品はそれまでの交響曲の枠組みに収まらない作品となった訳であるが、ベルリオーズはコンサートに際してプログラムの配布は欠かせないと述べている。後に標題のみが伝われば十分だとしているが、各楽章に関するテクストはこの作品を理解するには欠かせない。ここでは、この作品のあらすじ、そして各楽章の標題を示すのにとどまるが、コンサート当日に配布するプログラムでは各楽章に関してより詳しく述べるため、この作品の世界観を十分に理解していただけるだろう。</p>
    <br/>
    <p>あらすじ</p>
    <p>病的な感受性と燃えるような想像力をもつ若い音楽家が、恋に絶望し、発作的に阿片を飲む。麻薬は死にいたらしめるには弱すぎ、彼は苦しい眠りに落ち奇妙な幻覚に包まれる。眠っている彼の病んだ頭の中に、音楽的な想念やイメージを通じて、さまざまな感覚、感情、記憶が現れる。恋人さえも一本の旋律と化してしまい、いたるところの見えたり聞こえたりするイデー・フィクスのような存在になる。</p>
    <div style="text-align:right"><p>（第3稿 1855年以降のスコアに記されているプログラムテクスト　池上純一訳）</p></div>
    <br/>
    <p>第1楽章「夢、情熱 Rêveries -Passions」</p>
    <p>第2楽章「舞踏会 Un Bal」</p>
    <p>第3楽章「野の風景 Scene aux Champs」</p>
    <p>第4楽章「断頭台への行進 Marche au Supplice」</p>
    <p>第5楽章「サバトの夜の夢 Songe d’une Nuit du Sabbat」</p>
    <br/>
    <p>（前田皓生）</p>
`
    return(
      <dev className="article concert" dangerouslySetInnerHTML={{ __html: source }} />
    )
  }
}

export default Symphonie_Fantastique;
