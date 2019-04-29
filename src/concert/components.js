import { default as ai } from "./articles/ai.jsx";
import { default as delete } from "./articles/delete.jsx";
import { default as israel } from "./articles/israel.jsx";
import { default as israel2 } from "./articles/israel2.jsx";
import { default as typora } from "./articles/typora.jsx";

const concert =
[
  {
    title: "記事の削除",
    url: "delete",
    date: "2019-04-29",
    author: "三石ミゲール",
    component: delete
  },
  {
    title: "Typora",
    url: "typora",
    date: "2019-04-28",
    author: "三石ミゲール",
    component: typora
  },
  {
    title: "AI",
    url: "ai",
    date: "2019-04-21",
    author: "三石ミゲール",
    component: ai
  },
  {
    title: "Test",
    url: "israel",
    date: "2019-04-21",
    author: "三石ミゲール",
    component: israel
  },
  {
    title: "Test2",
    url: "israel2",
    date: "2019-04-21",
    author: "三石ミゲール",
    component: israel2
  }
]

export default concert
