import React from "react";
import ReactGA from "react-ga";
import { Box, Button, ResponsiveContext, Text } from "grommet";
import styled from "styled-components";
import SubscriptionBox from "./SubscriptionBox";
import { readArticleList } from "./parser";

const Header = styled(Text)`
  display: block;
`;

const BlackLink = styled(Button)`
  color: black;
  font-size: 18px;
`;

const activeQuestionStyle = {
  color: "blue",
  fontStyle: "italic",
  cursor: "pointer",
};
const defaultQuestionStyle = { textDecoration: "none" };

const externalLinks = [
  {
    url:
      "https://medium.com/@anika.raghuvanshi/glimpsing-the-top-of-the-world-ee123d393832",
    title: "My friend's experience hiking to Everest basecamp",
  },
  {
    url:
      "https://humanparts.medium.com/the-funny-thing-about-depression-is-that-its-not-funny-73eca71622a6",
    title: "A story about depression",
  },
  {
    url:
      "http://www.kameli.net/~raimu/rnd/ted-chiang-story-of-your-life-2000.pdf",
    title: "The short story Arrival was based on",
  },
  {
    url: "https://www.lewissociety.org/innerring/",
    title: "C. S. Lewis's musings on being an 'insider'",
  },
];

const Homepage = () => {
  const [articleList, setArticleList] = React.useState([]);
  const [aboutVisible, setAboutVisible] = React.useState(false);
  const [questionStyle, setQuestionStyle] = React.useState(
    defaultQuestionStyle
  );
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
      <Header size="xxlarge" weight="bold" color="#829399">
        decoding the narwhal
      </Header>
      <Box margin={{ bottom: "large" }} flex="grow">
        <Header size="large" weight="bold" color="#829399">
          🦄 + 🐳 ={" "}
          <a
            onClick={() => {
              setAboutVisible(!aboutVisible);
            }}
            onMouseOver={() => {
              setQuestionStyle(activeQuestionStyle);
            }}
            onMouseOut={() => {
              setQuestionStyle(defaultQuestionStyle);
            }}
            style={questionStyle}
          >
            ?
          </a>
        </Header>
        {aboutVisible && (
          <Text>
            This website is Peter's attempt to encourage himself and others to
            write more things (:
          </Text>
        )}
      </Box>

      <Box direction="row" margin={{ bottom: "medium" }}>
        <Header size="xlarge" weight="bold" color="#829399">
          articles
        </Header>
      </Box>
      <Box margin={{ top: "medium", bottom: "large" }} flex="grow" gap="xsmall">
        {articleList.map((article) => {
          return (
            <a href={article.URL}>
              <BlackLink
                plain={true}
                hoverIndicator={true}
                margin={{ bottom: "xxsmall" }}
                size="small"
                label={article.TITLE}
              />
            </a>
          );
        })}
      </Box>
      <Box direction="row" margin={{ bottom: "medium" }}>
        <Header size="xlarge" weight="bold" color="#829399">
          other cool reading
        </Header>
      </Box>
      <Box margin={{ top: "medium", bottom: "large" }} flex="grow" gap="xsmall">
        {externalLinks.map((linkData) => {
          return (
            <a href={linkData.url}>
              <BlackLink
                plain={true}
                hoverIndicator={true}
                margin={{ bottom: "xxsmall" }}
                size="small"
                label={linkData.title}
              />
            </a>
          );
        })}
      </Box>

      <Box direction="column-reverse" fill="vertical">
        <SubscriptionBox />
      </Box>
    </Box>
  );
};

export default Homepage;
