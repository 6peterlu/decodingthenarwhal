import React from 'react';
import { Text } from 'grommet';
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

const Article = (props) => {
  const [articleData, setArticleData] = React.useState(null);
  React.useEffect(() => {
    const retrieveData = async () => {
      const response = await fetch(`../articles/${props.match.params.articleId}.txt`);
      const text = await response.text();
      const lines = text.split("\n");
      if (lines[0] !== "<!DOCTYPE html>") { // hack
        setArticleData({ title: lines[0], author: lines[1], date: lines[2], body: lines.slice(4) })
      }
    }
    retrieveData();
  }, [props.match.params])
  return <>
    {articleData ?
      <>
        <Title>{articleData.title}</Title>
        <Author>{articleData.author}</Author>
        <Date>{articleData.date}</Date>
        {articleData.body.map((paragraph) => {
          return <Paragraph>{paragraph}</Paragraph>
        })}
      </>
      : <Text>No article at this URL</Text>}
  </>
}

export default Article;