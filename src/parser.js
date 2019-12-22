const extractField = (line, extractFormat) => {
  const [fieldName, fieldType] = extractFormat;
  const linePredicate = line.slice(fieldName.length + 1);
  switch (fieldType) {
    case "string":
      return linePredicate;
    case "list":
      return linePredicate.split("|");
    case "date":
      return new Date(linePredicate + " PST");
    default:
      return linePredicate;
  }
}

const articleRootPath = `${process.env.NODE_ENV === "production" ? "https://www.decodingthenarwhal.com" : "http://localhost:3001"}/article/`

export const readArticleList = async () => {
  const fieldsToExtract = [
    ["TITLE", "string"],
    ["AUTHOR", "string"],
    ["DATE", "date"],
    ["URL", "string"],
    ["FEEDBACK", "string"],
    ["HOST", "string"],
    ["EDITORS", "list"]
  ] // this must be ordered.
  const response = await fetch(`../article-list.txt`);
  const text = await response.text();
  const lines = text.split("\n");
  const aggregateArticleInfo = [];
  let currentArticleData = {};
  let currentFieldIndex = 0;
  for (const line of lines) {
    if (line === "==") {
      aggregateArticleInfo.push(currentArticleData);
      currentArticleData = {}; // reset
      currentFieldIndex = 0;
      continue;
    }
    currentArticleData[fieldsToExtract[currentFieldIndex][0]] = extractField(line, fieldsToExtract[currentFieldIndex]);
    currentFieldIndex += 1;
  }
  aggregateArticleInfo.sort((a, b) => { return b.DATE - a.DATE; });
  return aggregateArticleInfo;
}

export const readSingleArticle = async (articleSubURL) => {
  const allArticles = await readArticleList();
  let articleMetadata;
  // get our article out of list
  for (const article of allArticles) {
    if (article.URL === `${articleRootPath}${articleSubURL}`) {
      articleMetadata = article;
    }
  }
  // URL was not found
  if (!articleMetadata) {
    return null;
  }
  // get our article text
  const response = await fetch(`../articles/${articleSubURL}.txt`);
  const text = await response.text();
  const lines = text.split("\n");
  articleMetadata.BODY = lines;
  return articleMetadata;
}