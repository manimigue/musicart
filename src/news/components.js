import { default as release } from "./articles/release.jsx";
import { default as settings } from "./articles/settings.jsx";
import { default as test } from "./articles/test.jsx";
import { default as test2 } from "./articles/test2.jsx";
import { default as test3 } from "./articles/test3.jsx";
import { default as test4 } from "./articles/test4.jsx";

const news =
[
  {
    title: "ホームページリリース",
    url: "release",
    date: "2019-05-02",
    author: "三石ミゲール",
    component: release
  },
  {
    title: "Test4",
    url: "test4",
    date: "2019-04-30",
    author: "三石ミゲール",
    component: test4
  },
  {
    title: "Test3",
    url: "test3",
    date: "2019-04-29",
    author: "三石ミゲール",
    component: test3
  },
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
  }
]

export default news
