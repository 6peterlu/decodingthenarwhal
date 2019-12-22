import React from 'react';
import ReactGA from 'react-ga';
import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';
import SubscriptionBox from "./SubscriptionBox";
import { readArticleList } from "./parser";

const Header = styled(Text) `
  display: block
`

const BlackLink = styled(Button) `
  color: black;
  font-size: 24px;
`
const GreenLink = styled(Button) `
  color: green;
  font-size: 15px;
`

const Homepage = () => {
  const [articleList, setArticleList] = React.useState([]);
  React.useEffect(() => {
    const retrieveData = async () => {
      const articleData = await readArticleList();
      setArticleList(articleData);
      // google analytics
      const currentURL = process.env.NODE_ENV === "production" ? "https://www.decodingthenarwhal.com" : "http://localhost:3001";
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.set({ page: currentURL })
      ReactGA.pageview(currentURL);
    }
    retrieveData();
  }, [])

  return <Box pad="xlarge" fill={true}>
    <Header size="xxlarge" weight="bold">decoding the narwhal</Header>
    <Header size="large" weight="bold" margin={{ bottom: "medium" }}>🦄 + 🐳 = ?</Header>

    <Box direction="row">
      <Header size="xlarge" weight="bold" margin={{ bottom: "small" }}>articles</Header>
      <GreenLink label="(submit an article)" plain={true} href="https://github.com/6peterlu/decodingthenarwhal" alignSelf="center" margin={{ left: "xsmall" }} />
    </Box>
    <Box gap="small" margin={{ top: "small" }}>
      {articleList.map((article) => {
        return (
          <Box direction="row" align="end" alignContent="end">
            <a href={article.URL}><BlackLink label={article.TITLE} plain={true} hoverIndicator={true} /></a>
            <Text size="small" margin={{ left: "small" }}>{`by ${article.AUTHOR}${article.HOST ? ' on ' + article.HOST : ''}`}</Text>
          </Box>
        )
      })}
    </Box>
    <Box direction="column-reverse" fill="vertical">

      <SubscriptionBox />
      <Header size="small">want notifications for new articles?</Header>
    </Box>
  </Box>
}

export default Homepage;