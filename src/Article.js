import React from "react";
import ReactGA from "react-ga";
import { Box, Button, ResponsiveContext, Text } from "grommet";
import styled from "styled-components";
import { readSingleArticle } from "./parser";
import { LinkPrevious } from "grommet-icons";

const Title = styled(Text)`
  display: block;
`;
const Author = styled(Text)`
  display: block;
`;
const Date = styled(Text)`
  display: block;
`;
const Editors = styled(Text)`
  display: block;
  font-style: italic;
`;
const Paragraph = styled(Text)`
  display: block;
  font-family: "Average", serif;
`;

const FeedbackButton = styled(Button)`
  color: #D1D1D1;
`;

const HomeButton = styled(Button)`
  font-weight: bold;
`;
const generateEditorsString = editorList => {
  const creditPrefix = "With edits from ";
  const creditSuffix = ".";
  let editorString = "";
  if (editorList.length === 1) {
    editorString = editorList[0];
  } else {
    editorList[editorList.length - 1] =
      "and " + editorList[editorList.length - 1];
    if (editorList.length > 2) {
      editorString = editorList.join(", ");
    } else {
      editorString = editorList.join(" ");
    }
  }
  return `${creditPrefix + editorString + creditSuffix}`;
};

const Article = props => {
  const [articleData, setArticleData] = React.useState(null);
  const size = React.useContext(ResponsiveContext);
  React.useEffect(() => {
    const retrieveData = async () => {
      const data = await readSingleArticle(props.match.params.articleId);
      setArticleData(data); // data is nullable
      // google analytics
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      const currentURL = `${
        process.env.NODE_ENV === "production"
          ? "https://www.decodingthenarwhal.com"
          : "http://localhost:3000"
      }/article/${props.match.params.articleId}`;
      ReactGA.set({ page: currentURL });
      ReactGA.pageview(currentURL);
    };
    retrieveData();
  }, [props.match.params]);
  return articleData ? (
    <Box align="center" pad={size === "wide" ? "xlarge" : "large"} background="#586F7C" animation="fadeIn">
      <Box width={{ max: "large" }}>
            <HomeButton
              margin={{ bottom: "medium" }}
              label="🦄 + 🐳"
              color="white"
              icon={<LinkPrevious size="medium" />}
              alignSelf="start"
              href={
                process.env.NODE_ENV === "production"
                  ? "https://www.decodingthenarwhal.com"
                  : "http://localhost:3000"
              }
          />
            <Title size="xxlarge">{articleData.TITLE}</Title>
            <Author size="medium">{articleData.AUTHOR}</Author>
            <Date size="small" margin={{ bottom: "medium" }}>
              {articleData.DATE.toISOString().split("T")[0]}
            </Date>

            {articleData.BODY.map(paragraph => {
              return (
                <Paragraph margin={{ vertical: "small" }} size="large">
                  {paragraph}
                </Paragraph>
              );
            })}
            {articleData.EDITORS && articleData.EDITORS.length > 0 ? (
              <Editors margin={{ vertical: "large" }} size="small">
                {generateEditorsString(articleData.EDITORS)}
              </Editors>
            ) : null}
            {articleData.FEEDBACK && <FeedbackButton
              href={articleData.FEEDBACK}
              label="comment on article here"
              plain={true}
              fill={false}
            />}
            <HomeButton
              margin={{ top: "medium" }}
              label="🦄 + 🐳"
              color="white"
              icon={<LinkPrevious size="medium" />}
              alignSelf="start"
              href={
                process.env.NODE_ENV === "production"
                  ? "https://www.decodingthenarwhal.com"
                  : "http://localhost:3000"
              }
          />

      </Box>
    </Box>
  ) : null;
};

export default Article;
