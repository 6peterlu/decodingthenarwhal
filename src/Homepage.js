import { Link } from "react-router-dom";
import React from 'react';
import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';

const Header = styled(Text) `
  display: block
`
const Subheader = styled(Text) `
  display: block
`

const ArticleLink = styled(Button) `
  color: black
`

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

  return <Box pad="xlarge">
    <Header size="xxlarge" margin={{ bottom: "medium" }}>decoding the narwhal</Header>
    <Subheader size="xlarge" margin={{ bottom: "small" }}>articles</Subheader>
    {articleList.map((article) => {
      return <Link to={`article/${convertArticleTitleToURL(article)}`}><ArticleLink label={article} plain={true} hoverIndicator={true} /></Link>
    })}
  </Box>
}

export default Homepage;