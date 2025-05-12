
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


// 暂时用静态数据
const posts = {
  '1': {
    title: '第一篇博客',
    content: '# 欢迎\n这是我的第一篇博客内容，使用 &zwnj;**Markdown**&zwnj; 编写！'
  },
  '2': {
    title: 'React 入门',
    content: '## React 是什么?\nReact 是一个用于构建用户界面的 JavaScript 库。'
  }
};

export default function Post() {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) return <div>文章不存在</div>;

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      <ReactMarkdown className="markdown-body">{post.content}</ReactMarkdown>
    </div>
  );
}
