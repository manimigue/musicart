import I1 from './assets/微小弦.png'
import I2 from './assets/振り子.png'
import I3 from './assets/g.png'
import React, { Component } from 'react'
import MarkdownRender from "@nteract/markdown";

class C_apptest extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    const source = `
レポート課題

#### 1

##### 1-1

紐の位置$x$周辺の微小領域において，その長さを$\\Delta x$としたとき，左端と右端の角度を図1のようにそれぞれ$\\theta_1,\\theta_2$とする。

![微小弦](assets/微小弦.png)

線密度が$\\rho$であるので質量は$\\rho \\Delta x$，弦の両端にかかる張力は$mg$となるので，運動方程式は
$$
\\rho \\Delta x\\frac{\\partial^2 \\zeta}{\\partial t^2}=mg\\sin\\theta_2-mg\\sin\\theta_1\\tag1
$$
となる。

ここで，$z$軸方向の変位は微小であるので$\\theta_1,\\theta_2\\ll1$より
$$
\\sin\\theta_1\\approx\\tan\\theta_1=\\left.\\frac{\\partial \\zeta}{\\partial x}\\right|_{x-\\frac{\\Delta x}{2}}\\\\
\\sin\\theta_2\\approx\\tan\\theta_2=\\left.\\frac{\\partial \\zeta}{\\partial x}\\right|_{x+\\frac{\\Delta x}{2}}
$$
と近似できる。(1)式に代入すると
$$
\\frac{\\partial^2 \\zeta}{\\partial t^2}=\\frac{mg}{\\rho}\\frac{\\left.\\frac{\\partial \\zeta}{\\partial x}\\right|_{x+\\frac{\\Delta x}{2}}-\\left.\\frac{\\partial \\zeta}{\\partial x}\\right|_{x-\\frac{\\Delta x}{2}}}{
\\Delta x}
$$
$\\Delta x\\to 0$として
$$
\\frac{\\partial^2 \\zeta}{\\partial t^2}=\\frac{mg}{\\rho}\\frac{\\partial^2\\zeta}{\\partial x^2}\\tag2
$$
##### 1-2

$\\zeta=\\zeta_n=\\sin\\dfrac{n\\pi x}L(A_n\\cos\\omega_n t+B_n\\sin\\omega_n t)$を(2)式に代入すると，
$$
-\\omega_n^2\\sin\\dfrac{n\\pi x}L(A_n\\cos\\omega_n t+B_n\\sin\\omega_n t)=-\\frac{mg}\\rho \\frac{n^2\\pi^2}{L^2}\\sin\\dfrac{n\\pi x}L(A_n\\cos\\omega_n t+B_n\\sin\\omega_n t)\\\\
\\omega_n^2=\\frac{mg}\\rho \\frac{n^2\\pi^2}{L^2}
$$
より
$$
\\omega_n=\\frac{n\\pi}{L}\\sqrt\\frac{mg}\\rho
$$
とおくと(2)式の解となる。

##### 1-3

![振り子](assets/振り子.png)

振り子運動する軌道に沿った$\\theta=0$の点からの座標を$s$とすると，運動方程式は
$$
m\\frac{d^2s}{dt^2}=-mg\\sin \\theta
$$
$s= l\\theta$，また$\\theta\\ll 1$より$\\sin\\theta \\approx \\theta$と近似して
$$
\\frac{d^2\\theta}{dt^2}=-\\frac gl\\theta
$$
これの解は$\\theta(0)=\\theta_0,\\dot\\theta(0)=0$より$\\omega = \\sqrt{g\\over l}$ とおいて
$$
\\theta(t)=\\theta_0\\cos \\omega t
$$
ここで，紐の張力$T(t)$は
$$
T(t)=mg\\cos\\theta(t)
$$
である。$\\theta\\ll 1$より$\\cos\\theta \\approx 1-\\frac{\\theta^2}2$と$\\theta$の二次までで近似して
$$
T(t)=mg(1-\\frac{\\theta_0^2}2\\cos^2\\omega t)
$$

##### 1-4

1-1の考察において$mg\\to T(t)$と置き換えても同じ考察ができるので，
$$
\\frac{\\partial^2 \\zeta}{\\partial t^2}=\\frac{T(t)}{\\rho}\\frac{\\partial^2\\zeta}{\\partial x^2}\\tag{$2'$}
$$
が成り立つ。ここに
$$
\\zeta=\\sum_{n=1}^\\infty\\zeta_n=\\sum_{n=1}^\\infty\\sin\\dfrac{n\\pi x}L a_n(t)
$$
を代入すると
$$
\\sum_{n=1}^\\infty\\sin\\dfrac{n\\pi x}L \\ddot a_n(t)= -\\frac{T(t)\\pi^2}{\\rho L^2} \\sum_{n=1}^\\infty n^2\\sin\\dfrac{n\\pi x}L a_n(t)
$$
よって，$\\sin\\dfrac{n\\pi x}L$の直交性より
$$
\\ddot a_n(t) + \\frac{T(t)n^2\\pi^2}{\\rho L^2}a_n(t)=0\\\\
\\ddot a_n(t) + \\frac{mgn^2\\pi^2}{\\rho L^2}(1-\\frac{\\theta_0^2}2\\cos^2\\omega t)a_n(t)=0\\\\
\\ddot a_n(t) + \\frac{4mgn^2\\pi^2}{\\rho L^2(4-\\theta_0^2)}(1-\\frac{\\theta_0^2}{4-\\theta_0^2}\\cos2\\omega t)a_n(t)=0\\\\
$$
マシューの式と同形になる。実際，
$$
\\omega_0^2= \\frac{4mgn^2\\pi^2}{\\rho L^2(4-\\theta_0^2)}\\\\
 4\\varepsilon = -\\frac{\\theta_0^2}{4-\\theta_0^2}
$$
とおき，$\\omega_0 t\\to t$と変換すると
$$
\\ddot a_n(t) +(1+4\\varepsilon\\cos2\\frac\\omega{\\omega_0} t)a_n(t)=0\\\\ \\tag{3}
$$

##### 1-5

$\\dfrac \\omega{\\omega_0}=1$が増幅する条件となる。よって，
$$
\\omega^2=\\omega^2_0\\\\
\\frac gl=\\frac{4mgn^2\\pi^2}{\\rho L^2(4-\\theta_0^2)}\\\\
\\therefore \\ l=\\frac{\\rho L^2(4-\\theta_0^2)}{4mn^2\\pi^2}
$$

##### 1-6

この時，解を$a_n=e^{\\lambda t}\\sin (t-\\beta)$と仮定する
$$
\\dot a_n=e^{\\lambda t}(\\lambda\\sin(t-\\beta)+\\cos(t-\\beta))\\\\
\\ddot a_n=e^{\\lambda t}(\\lambda^2\\sin(t-\\beta)+2\\lambda\\cos(t-\\beta)-\\sin(t-\\beta))\\\\
a_n\\cos 2t=e^{\\lambda t}\\sin (t-\\beta)\\cos 2t\\\\
=\\frac 1 2 (\\sin (3t-\\beta)-\\sin(t+\\beta))
$$
(3)式に代入して

$e^{\\lambda t}\\sin(t-\\beta)$の係数: $\\lambda^2-2\\varepsilon \\cos 2\\beta=0\\to\\lambda^2=2\\varepsilon \\cos 2\\beta$

$e^{\\lambda t}\\cos(t-\\beta)$の係数: $2\\lambda-2\\varepsilon \\sin 2\\beta=0\\to2\\lambda=2\\varepsilon \\sin 2\\beta$
$$
\\therefore \\ \\ \\lambda^4+4 \\lambda^2=4\\varepsilon^2\\\\
\\lambda^2=-2+2\\sqrt{1+\\varepsilon^2}
$$
ここで$\\theta_0\\ll 1$より
$$
\\varepsilon^2 = \\left(\\frac{\\theta_0^2}{4(4-\\theta_0^2)}\\right)^2\\ll 1
$$
よって
$$
\\lambda^2\\simeq-2+2(1+\\frac 1 2 \\varepsilon^2)=\\varepsilon^2
$$
$\\varepsilon<0$であり振幅が増幅される時を考えているので，
$$
\\lambda = -\\varepsilon=\\frac{\\theta_0^2}{4-\\theta_0^2}
$$

#### 2

##### 2-1

平衡状態をまず考えると$\\frac {dx}{d\\tau}=0$として
$$
\\left(1-\\frac x{x_d}\\right)x=\\alpha'\\sqrt x\\\\
\\left(1-\\frac x{x_d}\\right)^2x=\\alpha'^2
$$
左辺を$g(x)$とすると，

![gグラフ](assets/g.png)

よって，$\\alpha'$を徐々に大きくしていくと$\\alpha'^2<\\frac{4 x_d}{27}$までは$x<\\frac{x_d}{3}$で平衡状態になるような挙動を取れるが，$\\alpha'^2>\\frac{4 x_d}{27}$だと$x<x_d$で平衡状態になれる解が存在しなくなるため，授業で見たように$x$が大きくなり，$x=x_d$を表す電極については電荷を失い離れ，また大きくなるような振動を繰り返すようになる。よって，$\\alpha'$の閾値は$\\dfrac {2}{9}\\sqrt{3x_d}$。

##### 2-2



##### 2-3

$$
\\left(1-\\frac x{x_d}\\right)^2x=\\alpha'^2
$$

の解をとる。
`
.replace('assets/微小弦.png',I1)
.replace('assets/振り子.png',I2)
.replace('assets/g.png',I3)
    return(
      <MarkdownRender className='article' source={source} escapeHtml={false}/>
    )
  }
}

export default C_apptest;
