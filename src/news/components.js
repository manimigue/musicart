import { default as ai } from "./articles/ai.jsx";
import { default as israel } from "./articles/israel.jsx";
import { default as markdown } from "./articles/markdown.jsx";
import { default as settings } from "./articles/settings.jsx";

const news =
[
  {
    title: "Markdownとは",
    url: "markdown",
    date: "2019-04-23",
    author: "三石ミゲール",
    component: markdown
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
  },
  {
    title: "Test",
    url: "ai",
    date: "2019-04-21",
    author: "三石ミゲール",
    component: ai
  }
]

export default news
