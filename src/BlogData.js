// ブログ記事のデータ管理
// 新しい記事を追加する場合は、このファイルにデータを追加するだけでOK

export const blogPosts = [
  {
    id: 1,
    title: "GitHub PagesにReactをデプロイする",
    date: "2022/09/08",
    url: "/about/blog/1",
    excerpt: "ReactアプリをGitHub Pagesにデプロイする手順について詳しく解説します。",
    tags: ["React", "GitHub Pages", "デプロイ"],
    published: true
  },
  // 新しい記事を追加する場合のテンプレート
  // {
  //   id: 2,
  //   title: "記事タイトル",
  //   date: "YYYY/MM/DD",
  //   url: "/about/blog/2",
  //   excerpt: "記事の概要",
  //   tags: ["タグ1", "タグ2"],
  //   published: true
  // }
];

// 公開済みの記事のみを取得
export const getPublishedPosts = () => {
  return blogPosts.filter(post => post.published);
};

// IDで特定の記事を取得
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

// 最新の記事を取得
export const getLatestPosts = (count = 5) => {
  return getPublishedPosts()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// タグで記事を検索
export const getPostsByTag = (tag) => {
  return getPublishedPosts().filter(post => 
    post.tags.includes(tag)
  );
};