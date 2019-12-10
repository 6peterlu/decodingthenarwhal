import { Link } from "react-router-dom";
import React from 'react';
import { Button } from 'grommet';

import "file-system"

const Homepage = () => {
  const [articleList, setArticleList] = React.useState([]);
  React.useEffect(() => {
    const retrieveData = async () => {
      const response = await fetch(`../article-list.txt`);
      const text = await response.text();
      const lines = text.split("\n");
      setArticleList(lines);
    }
    retrieveData();
  }, [])

  const convertArticleTitleToURL = (title) => {
    const tokens = title.split(" ")
    const lowercased = tokens.map((token) => { return token.toLowerCase() })
    return lowercased.join("-");
  }

  return <>
    {articleList.map((article) => {
      return <Link to={`article/${convertArticleTitleToURL(article)}`}><Button label={article} /></Link>
    })}
  </>
}

export default Homepage;