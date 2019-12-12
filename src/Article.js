import React from 'react';
import { Box, Button, Text } from 'grommet';
import styled from "styled-components";

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
  display: block
`

const FeedbackButton = styled(Button) `
  color: green
`

const Article = (props) => {
  const [articleData, setArticleData] = React.useState(null);
  React.useEffect(() => {
    const retrieveData = async () => {
      const response = await fetch(`../articles/${props.match.params.articleId}.txt`);
      const text = await response.text();
      const lines = text.split("\n");
      if (lines[0] !== "<!DOCTYPE html>") { // hack
        console.log(lines[0])
        setArticleData({ feedbackURL: lines[0], title: lines[1], author: lines[2], date: lines[3], body: lines.slice(5) })
      }
    }
    retrieveData();
  }, [props.match.params])
  return <Box pad="xlarge">
    {articleData ?
      <>
        <Title size="xxlarge">{articleData.title}</Title>
        <Author size="medium">{articleData.author}</Author>
        <Date size="medium" margin={{ bottom: "medium" }}>{articleData.date}</Date>

        {articleData.body.map((paragraph) => {
          return <Paragraph margin={{ vertical: "small" }}>{paragraph}</Paragraph>
        })}
        <FeedbackButton href={articleData.feedbackURL} label="submit your feedback here" plain={true} fill={false} margin={{ top: "large" }} />
      </>
      : <Text>Loading...</Text>}
  </Box>
}

export default Article;