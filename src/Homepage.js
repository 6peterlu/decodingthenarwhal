import React from "react";
import ReactGA from "react-ga";
import { Box, Button, ResponsiveContext, Text } from "grommet";
import styled from "styled-components";
import SubscriptionBox from "./SubscriptionBox";
import { readArticleList } from "./parser";

const Header = styled(Text) `
  display: block;
`;

const BlackLink = styled(Button) `
  color: black;
  font-size: 24px;
`;
const GreenLink = styled(Button) `
  color: green;
  font-size: 15px;
`;

const activeQuestionStyle = { color: "blue", fontStyle: "italic", cursor: "pointer" }
const defaultQuestionStyle = { textDecoration: "none" }

const Homepage = () => {
  const [articleList, setArticleList] = React.useState([]);
  const [aboutVisible, setAboutVisible] = React.useState(false);
  const [questionStyle, setQuestionStyle] = React.useState(defaultQuestionStyle)
  const size = React.useContext(ResponsiveContext);
  React.useEffect(() => {
    const retrieveData = async () => {
      const articleData = await readArticleList();
      setArticleList(articleData);
      // google analytics
      const currentURL =
        process.env.NODE_ENV === "production"
          ? "https://www.decodingthenarwhal.com"
          : "http://localhost:3001";
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.set({ page: currentURL });
      ReactGA.pageview(currentURL);
    };
    retrieveData();
  }, []);

  return (
    <Box pad={size === "wide" ? "xlarge" : "large"} fill={true}>
      <Header size="xxlarge" weight="bold">
        decoding the narwhal
      </Header>
      <Box margin={{ bottom: "xlarge" }}>
        <Header size="large" weight="bold" >
          🦄 + 🐳 = <a onClick={() => { setAboutVisible(!aboutVisible) }} onMouseOver={() => { setQuestionStyle(activeQuestionStyle) }} onMouseOut={() => { setQuestionStyle(defaultQuestionStyle) }} style={questionStyle}>?</a>
        </Header>
        {aboutVisible &&
          <>
            <Text margin={size !== "wide" ? { bottom: "xlarge" } : null}>This website is Peter's attempt to encourage himself and others to write more things (:</Text>
          </>
        }
      </Box>

      <Box direction="row">
        <Header size="xlarge" weight="bold" margin={{ bottom: "small" }}>
          articles
        </Header>
        <GreenLink
          label="(submit an article)"
          plain={true}
          href="https://github.com/6peterlu/decodingthenarwhal"
          alignSelf="center"
          margin={{ left: "xsmall" }}
        />
      </Box>
      <Box margin={{ top: "medium", bottom: "large" }} flex="grow" gap="xsmall">
        {articleList.map(article => {
          return (
            <Box direction="row" align="end" alignContent="end" wrap={true}>
              <a href={article.URL}>
                <BlackLink
                  label={article.TITLE}
                  plain={true}
                  hoverIndicator={true}
                />
              </a>
              <Text size="small" margin={{ left: "small" }}>{`by ${
                article.AUTHOR
                }${article.HOST ? " on " + article.HOST : ""}`}</Text>
            </Box>
          );
        })}
      </Box>

      <Box direction="column-reverse" fill="vertical">
        <SubscriptionBox />
        <Header size="small">want notifications for new articles?</Header>
      </Box>
    </Box >
  );
};

export default Homepage;
