import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Article from "./Article";
import Homepage from "./Homepage";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/article/:articleId" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
