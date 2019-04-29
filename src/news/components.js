import { default as israel } from "./articles/israel.jsx";
import { default as settings } from "./articles/settings.jsx";
import { default as test } from "./articles/test.jsx";
import { default as test2 } from "./articles/test2.jsx";

const news =
[
  {
    title: "Test2",
    url: "test2",
    date: "2019-04-29",
    author: "三石ミゲール",
    component: test2
  },
  {
    title: "Test",
    url: "test",
    date: "2019-04-29",
    author: "三石ミゲール",
    component: test
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
