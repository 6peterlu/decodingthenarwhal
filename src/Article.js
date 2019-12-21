import React from 'react';
import { Box, Button, Text } from 'grommet';
import styled from "styled-components";
import { readSingleArticle } from "./parser";

const Title = styled(Text) `
  display: block
`
const Author = styled(Text) `
  display: block
`
const Date = styled(Text) `
  display: block
`
const Paragraph = styled(Text) `
  display: block;
  font-family: 'Average', serif;
`

const FeedbackButton = styled(Button) `
  color: green
`

const Article = (props) => {
  const [articleData, setArticleData] = React.useState(null);
  React.useEffect(() => {
    const retrieveData = async () => {
      const data = await readSingleArticle(props.match.params.articleId);
      setArticleData(data); // data is nullable
    }
    retrieveData();
  }, [props.match.params])
  return <Box pad="xlarge">
    {articleData ?
      <>
        <Title size="xxlarge">{articleData.TITLE}</Title>
        <Author size="medium">{articleData.AUTHOR}</Author>
        <Date size="medium" margin={{ bottom: "medium" }}>{articleData.DATE.toISOString().split("T")[0]}</Date>

        {articleData.BODY.map((paragraph) => {
          return <Paragraph margin={{ vertical: "small" }}>{paragraph}</Paragraph>
        })}
        <FeedbackButton href={articleData.FEEDBACK} label="submit your feedback here" plain={true} fill={false} margin={{ top: "large" }} />
      </>
      : <Text>Loading...</Text>}
  </Box>
}

export default Article;