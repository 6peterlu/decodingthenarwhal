import React from 'react';
import ReactGA from 'react-ga';
import { Box, Button, Text } from 'grommet';
import styled from "styled-components";
import { readSingleArticle } from "./parser";
import { LinkPrevious } from "grommet-icons";

const Title = styled(Text) `
  display: block
`
const Author = styled(Text) `
  display: block
`
const Date = styled(Text) `
  display: block
`
const Editors = styled(Text)`
  display: block;
  font-style: italic;
`
const Paragraph = styled(Text) `
  display: block;
  font-family: 'Average', serif;
`

const FeedbackButton = styled(Button) `
  color: green
`

const HomeButton=styled(Button)`
  font-weight:bold;
`
const generateEditorsString = (editorList) => {
  const creditPrefix = "With edits from ";
  const creditSuffix = ".";
  let editorString = "";
  if (editorList.length === 1) {
      editorString = editorList[0];
  } else {
    editorList[editorList.length - 1] = "and " + editorList[editorList.length - 1];
    if (editorList.length > 2) {
      editorString = editorList.join(", ");
    } else {
      editorString = editorList.join(" ");
    }
  }
  return `${creditPrefix + editorString + creditSuffix}`;
}

const Article = (props) => {
  const [articleData, setArticleData] = React.useState(null);
  React.useEffect(() => {
    const retrieveData = async () => {
      const data = await readSingleArticle(props.match.params.articleId);
      setArticleData(data); // data is nullable
      // google analytics
      console.log(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      const currentURL = `${process.env.NODE_ENV === "production" ? "https://www.decodingthenarwhal.com": "http://localhost:3001"}/article/${props.match.params.articleId}`;
      ReactGA.set({page: currentURL})
      ReactGA.pageview(currentURL);
    }
    retrieveData();
  }, [props.match.params])
  return(
  <Box align="center" pad="xlarge">
  <Box width={{max: "large"}}>
    <HomeButton margin={{bottom: "large"}} label="🦄 + 🐳" color="black" icon={<LinkPrevious size="medium"/>}  alignSelf="start" href={process.env.NODE_ENV === "production" ? "https://www.decodingthenarwhal.com": "http://localhost:3001"}/>
    {articleData ?
      <>
        <Title size="xxlarge">{articleData.TITLE}</Title>
        <Author size="medium">{articleData.AUTHOR}</Author>
        <Date size="small" margin={{ bottom: "medium" }}>{articleData.DATE.toISOString().split("T")[0]}</Date>

        {articleData.BODY.map((paragraph) => {
          return <Paragraph margin={{ vertical: "small" }}>{paragraph}</Paragraph>
        })}
        {articleData.EDITORS ? <Editors margin={{vertical: "large"}} size="small">{generateEditorsString(articleData.EDITORS)}</Editors> : null}
        <FeedbackButton href={articleData.FEEDBACK} label="submit your feedback here" plain={true} fill={false} />
      </>
      : <Text>Loading...</Text>}
  </Box>
  </Box>);
}

export default Article;