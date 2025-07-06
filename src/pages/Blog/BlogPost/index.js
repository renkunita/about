import React from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "./BlogData";
import "./Home.css";
import "./BlogPost.css";
import usePageTracking from "./usePageTracking";

const BlogPost = () => {
  usePageTracking();
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <div className="content">
        <div className="post-not-found">
          <h1>記事が見つかりません</h1>
          <p>指定された記事は存在しないか、削除された可能性があります。</p>
          <Link to="/about/blog" className="back-to-blog">
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <article className="blog-post">
        <header className="post-header">
          <div className="post-meta">
            <Link to="/about/blog" className="back-link">
              ← ブログ一覧に戻る
            </Link>
            <time className="post-date">{post.date}</time>
          </div>
          <h1 className="post-title">{post.title}</h1>
          {post.tags && post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </header>
        
        <div className="post-content">
          {/* 実際の記事内容はここに動的に読み込む */}
          <p>記事の内容がここに表示されます。</p>
          <p>実際のプロジェクトでは、MarkdownファイルやCMSから内容を読み込みます。</p>
          
          {/* 例：GitHub Pagesデプロイ記事の内容 */}
          {post.id === 1 && (
            <div>
              <h2>はじめに</h2>
              <p>ReactアプリをGitHub Pagesにデプロイする方法について説明します。</p>
              
              <h2>手順</h2>
              <ol>
                <li>GitHub Pagesの設定</li>
                <li>package.jsonの設定</li>
                <li>ビルドとデプロイ</li>
              </ol>
              
              <h2>まとめ</h2>
              <p>GitHub Pagesを使うことで、簡単にReactアプリを公開できます。</p>
            </div>
          )}
        </div>
        
        <footer className="post-footer">
          <div className="post-navigation">
            <Link to="/about/blog" className="nav-link">
              ブログ一覧に戻る
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;