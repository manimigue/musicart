import React from 'react';
import { Route } from 'react-router-dom';

const routes = (articles, path) => {
  return (
    articles.map((article,i) => {
      const url = path + '/' + article.url;
      console.log(url);
      return (
        <Route exact path={url} component={article.component} key={i+'rout'}/>
      );
    })
  );
}

export default routes;
