import React from 'react';
import { Route } from 'react-router-dom';
import Back from '../components/Back'



const routes = (articles, path) => {
  return (
    articles.map((article,i) => {
      const url = '/' + path + '/' + article.url;
      const component = () => (
        <div className="article-content">
          <Back home={path}>&#8249; 戻る</Back>
          <article.component />
          <Back home={path}>&#8249; 戻る</Back>
        </div>
      )
      return (
        <Route exact path={url} component={component} key={i+'rout'}/>
      );
    })
  );
}

export default routes;
