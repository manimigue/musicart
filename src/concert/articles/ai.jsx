
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class ai extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
## AI Boot Camp
CNN(畳み込みニューラルネットワーク)を扱い、画像認識を実装する  
強いAIと弱いAI　汎用性があるかどうかだが、現在の主流は弱い方  
#### 教師あり学習
分類モデルと数値予測をする回帰モデル  
**訓練データとテストデータに分けて過学習を防ぐ**  
人が決めるパラメータを*ハイパーパラメーター*という  
#### 回帰モデル
線型単回帰　from one to one data   直線を決める　y = ax + b  
線型重回帰　平面を決める  
損失関数というのが色々ある　(MSE)  
#### 汎化
過学習を防ぎ、未知のデータにも対応できるように滑らかな曲線を得る  
そのためには正則化(損失関数以外にペナルティ項をたす、L1はLasso回帰,L2はRidge回帰,L1L2どちらも使うのがElastic Net回帰)をする  
非線形回帰は線型になるように線型に移動してからやる?  
#### 分類モデル  
ロジスティック回帰、回帰モデルとして確率を得る  
support vector machine SVN 分離する直線を引き、サポートベクトル(一番近い点から直線へのベクトル)が最も大きくなるようにする  
直線でないときは非線形モデルも使える  
#### 決定木
不順度(分類出来具合)によって最適なパラメータを決める  
これを組み合わせたのが**ランダムフォレスト**,各決定木の多数決で分類,小さな木をいっぱい使うから森  
#### K-NN  
事前学習を行わない怠惰学習　周りから一定の距離にあるデータの多数決で分類　この距離がハイパーパラメータ  
### データの分け方
#### ホールドアウト法
7:3ぐらい  
#### K-分割交差法
k個に分割、1個をテストデータとして評価、k回行い平均を取る  
### 評価の方法
#### 決定係数
出力と実際の差から、1に近いほどいいモデル
#### 混合行列と正解率
PNに分類する場合、TrueFalse　でTP,FP,FN,TNに分けられる　このうちのFの割合を正解率という  
適合率　実際PのうちTである精度　TP/FN+TP 間違ってもいいからPを出したい場合大事になる  
適合率と再現率はトレードオフの関係にある　F値を良く使う　
### Google Colaboratory  
GPUを使えるから、ニューラルネットワーク使うんだったらこっちの方が早い  
てか他にも使えるね  
## 教師なし学習
クラスタリングと主成分分析  
#### クラスタリング
データが近いものでクラスタを作っていく  
階層的クラスタリング　クラスタからさらにクラスタを作っていく　クラスタの関係を樹形図にまとめられる  
非階層的クラスタリング　クラスタの上下関係はなく、点でのみクラスタを作っていく  
k-means クラスタ数kをハイパーパラメータとする　ランダムでクラスタを作り、そこに入るよう少しずつ分類、再計算　KMeans(k,,,)  
エルボー法　kをクラスタの集約度と多さを天秤かけて決めてくれる  
DBSCAN めっちゃまとまってるコア点のみ使う　ノイズを除去しやすい  
#### 主成分分析
データの要素が多い時に圧縮して次元数をうまく削る　各パラメータの情報をそれぞれの相関から圧縮する  
PCA 計算量を削減できる  
## ニューラルネットワーク
RNN(深層)-> CNN  
　　　　　-> RNN回帰結合  
input x → $\\sigma (wx+b)= 0,1$ w重み　bバイアス　$\\sigma$活性化関数  
W = [[w_11,w_12,..],[,,,],,,]、B=[b1,b2,,,,] とすると 出力は$\\sigma$(WX+B)  
出力と正解の二乗誤差を小さくしていく  
#### 勾配降下法
$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$学習率  
学習率は固定したりしなかったり　変更の方法は、最初大きく、だんだん小さくが多い  
各ノードの偏微分(変化量)が結果に与える影響で少しずつ変えていく  
ただし、ノードが多いとかけて行って小さくなりすぎてしまうことがある  
relu関数は微分が1で一定なのでこれが起こりにくい  
Adamが最適らしい　なぜなら学習率を自動で決めて行ってくれ、いろいろな方法のいいとこ取りみたいなやつだから  
過学習を抑えるドロップアウト法　一部ランダムで使わないようにする  
再現率が高い→異常は検知できるが誤判定は知らん  
精度が高い→異常である可能性は高いが検知できないのはわからない  
### ディープラーニングのブレイクスルー
リソースの充実(データ量、GPGPU、インターネットの普及)による  
## CNN
大きさ、色合いが違えど同じものを識別したい→生物の視野に似ている畳み込み(畳み込み層=単純細胞、プーリング層=複雑細胞)  
カーネルで一つの特徴を捉え(重み共有結合)、プーリングで一部削ぎ落とす  
カーネルはちょっとした配列、これを入力全体に部分的に要素積とって行って出力とする→カーネルの要素をどれぐらいどこに含んでいるか  
周囲をゼロで埋めて(ゼロパディング)ストライドを広げても全体取れるようにする  
ストライドは大きいと計算は減るが精度落ちる  
プーリング　マックスプーリングは分割領域の最大値のみとる、とか一部の特徴にまとめる→位置による変化に影響受けにくい  
#### 学習前
水増し　学習前にデータを線型移動していろいろなタイプの画像作ると同時に学習データを多くする  
正規化すると境界を強調できる  
#### いろいろ
R-CNN リアルタイム処理のやつ  
deep is bette  
`
    return(
      <MarkdownRender className='article concert' source={source} escapeHtml={false}/>
    )
  }
}

export default ai;
