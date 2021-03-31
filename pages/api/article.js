const Article = (_, res) => {
  res.statusCode = 200
  res.json({
    id: 1,
    author: 'Ashutosh Malve',
    company: 'MalveOrg',
    image_url: 'https://miro.medium.com/fit/c/262/262/1*A_obp7pGgHUULd1-FxZwEQ.png',
    content: "How do I learn machine learning '?'"
  })
}

export default Article
