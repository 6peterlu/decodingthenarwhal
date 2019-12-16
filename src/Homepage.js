import { Link } from "react-router-dom";
import React from 'react';
import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';
import SubscriptionBox from "./SubscriptionBox";

const Header = styled(Text) `
  display: block
`

const BlackLink = styled(Button) `
  color: black
`
const GreenLink = styled(Button) `
  color: green;
  font-size: 30px;
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

  return <Box pad="xlarge" fill={true}>
    <Header size="xxlarge">decoding the narwhal</Header>
    <Header size="large" margin={{ bottom: "medium" }}>🦄 + 🐳 = ?</Header>

    <Header size="xlarge" margin={{ bottom: "small" }}>articles</Header>
    {articleList.map((article) => {
      return <Link to={`article/${convertArticleTitleToURL(article)}`}><BlackLink label={article} plain={true} hoverIndicator={true} /></Link >
    })}
    <Box direction="column-reverse" fill="vertical">
      <SubscriptionBox />
      <GreenLink label="submit an article" plain={true} margin={{ bottom: "large" }} href="https://github.com/6peterlu/decodingthenarwhal" />
    </Box>
  </Box>
}

export default Homepage;