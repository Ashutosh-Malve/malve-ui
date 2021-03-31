import Article from './index';

const articleMock = {
  id: 1,
  author: 'Ashutosh Malve',
  company: 'MalveOrg',
  image_url: 'https://miro.medium.com/fit/c/262/262/1*A_obp7pGgHUULd1-FxZwEQ.png',
  content: "How do I learn machine learning '?'"
}

const Story = (props) => <Article {...props} />

// Here we export a variant of the default template passing props--
export const ArticleStory = Story.bind({})
ArticleStory.args = {
  article: articleMock,
};

// Here we export a variant of the default template passing props--
export const EmptyArticleStory = Story.bind({})
EmptyArticleStory.args = {
  article: null,
};

// Here we export the default component that -
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Article',
  component: Article,
  argTypes: {
    showImage: { control: 'boolean' },
  }, 
};
