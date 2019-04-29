import { default as israel } from "./articles/israel.jsx";
import { default as settings } from "./articles/settings.jsx";
import { default as typora } from "./articles/typora.jsx";

const news =
[
  {
    title: "Typoraの使い方",
    url: "typora",
    date: "2019-04-24",
    author: "三石ミゲール",
    component: typora
  },
  {
    title: "初期設定",
    url: "settings",
    date: "2019-04-23",
    author: "三石ミゲール",
    component: settings
  },
  {
    title: "Israel Report",
    url: "israel",
    date: "2019-04-20",
    author: "三石ミゲール",
    component: israel
  }
]

export default news
