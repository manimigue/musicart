
import React, { Component } from 'react'

class Danse_macabre extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
    <p>	カミーユ・サン＝サーンス Camille Saint-Saëns (1835-1921) は、その生涯に4つの交響詩を完成させた。《死の舞踏 <em>Danse macabre</em>》作品40はその一つで、《オンファールの糸車 <em>Le Rouet d&#39;Omphale</em>》作品31（1871年作曲）、《ファエトン<em>Phaéton</em>》作品39（1873年作曲）に続く、サン＝サーンス第3作目の交響詩である。</p>
    <p>	この作品は、作曲者がフランスの詩人アンリ・カザリス Henri Cazalis (1840-1909) の詩に基づき、1872年に書き上げたピアノ伴奏付きの歌曲《死の舞踏》を下敷きに、1874年に管弦楽曲としてまとめられたものである。初演は、1875年1月24日、パリのシャトレ座にて、エドゥアール・コロンヌ指揮、コンセール・デュ・シャトレ（のちのコンセール・コロンヌ）によって行なわれた。</p>
    <br/>
    <p>	《死の舞踏》の自筆スコア表紙には、カザリスの詩『平等、博愛… <em>Égalité-Fraternité…</em>』の一部が書き込まれている。以下、四行七連からなる原詩から、作曲者による引用箇所をご紹介する。</p>
    <div style="display:inline-flex;width:100%;flex-direction: row;">
      <div style="flex-basis: 50%"><p>
        Zig et zig et zig, la Mort en cadence<br/>
        Frappant une tombe avec son talon,<br/>
        La Mort à minuit joue un air de danse,<br/>
        Zig et zig et zag, sur son violon.<br/>
      </p></div>
      <div style="flex-basis: 50%"><p>
        ジグ、ジグ、ジグ、死神は、<br/>
        墓石の上、踵で拍子を取りながら、<br/>
        真夜中に奏する舞踏の調べ、<br/>
        ジグ、ジグ、ザグと、そのヴァイオリンで。<br/>
      </p></div>
    </div>
      <br/>
      <br/>
    <div style="display:inline-flex;width:100%;flex-direction: row;">
      <div style="flex-basis: 50%"><p>
        Le vent d'hiver souffle, et la nuit est sombre ;<br/>
        Des gémissements sortent des tilleuls ;<br/>
        Des squelettes blancs vont à travers l'ombre,<br/>
        Courant et sautant sous leurs grands linceuls.
      </p></div>
      <div style="flex-basis: 50%"><p>
        冬の風は吹き荒れて、夜は深まり、<br/>
        菩提樹から漏れるうめき声、<br/>
        蒼白の骸骨が闇の中から舞い出でて、<br/>
        屍衣を纏いて跳ね回る。<br/>
      </p></div>
    </div>
      <br/>
      <br/>
      <br/>
    <div style="display:inline-flex;width:100%;flex-direction: row;">
      <div style="flex-basis: 50%"><p>
        Zig et zig et zig, chacun se trémousse,<br/>
        On entend claquer les os des danseurs,
      </p></div>
      <div style="flex-basis: 50%"><p>
        ジグ、ジグ、ジグ、皆が体を揺らし、<br/>
        踊る骸骨たちのカチカチ擦れ合う骨の音が聞こえる。<br/>
      </p></div>
    </div>
      <br/>
    <div style="display:inline-flex;width:100%;flex-direction: row;">
      <div style="flex-basis: 50%"><p>
        [...]
      </p></div>
      <div style="flex-basis: 50%"><p>
        ［中略］<br/>
      </p></div>
    </div>
      <br/>
    <div style="display:inline-flex;width:100%;flex-direction: row;">
      <div style="flex-basis: 50%"><p>
        Mais psit! tout à coup on quitte la ronde,<br/>
        On se pousse, on fuit, le coq a chanté.<br/>
        [...]
      </p></div>
      <div style="flex-basis: 50%"><p>
        しっ！突然踊るのを止め、<br/>
        彼らは押し合い逃げていく。鶏が鳴いたのだ。<br/>
        ［後略］
      </p></div>
    </div>
    <div style="text-align:right"><p>（『イリュージョンL’illusion』所収）</p></div>
    <br/>
    <p>（木内涼）</p>
`
    return(
      <div className="article concert" dangerouslySetInnerHTML={{ __html: source }} />
    )
  }
}

export default Danse_macabre;
