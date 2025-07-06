import React from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../data/blog";
import homeStyles from "../../Home/Home.module.css";
import blogStyles from "./BlogPost.module.css";
import usePageTracking from "../../../hooks/usePageTracking";

const BlogPost = () => {
  usePageTracking();
  const { id } = useParams();
  const post = getPostById(id);

  const handleBackClick = () => {
    window.location.href = '/about/blog';
  };

  if (!post) {
    return (
      <div className={homeStyles.content}>
        <div className={blogStyles.postNotFound}>
          <h1>記事が見つかりません</h1>
          <p>指定された記事は存在しないか、削除された可能性があります。</p>
          <button onClick={handleBackClick} className={blogStyles.backToBlog}>
            ブログ一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={homeStyles.content}>
      <article className={blogStyles.blogPost}>
        <header className={blogStyles.postHeader}>
          <div className={blogStyles.postMeta}>
            <button onClick={handleBackClick} className={blogStyles.backLink}>
              ← ブログ一覧に戻る
            </button>
            <time className={blogStyles.postDate}>{post.date}</time>
          </div>
          <h1 className={blogStyles.postTitle}>{post.title}</h1>
          {post.tags && post.tags.length > 0 && (
            <div className={blogStyles.postTags}>
              {post.tags.map(tag => (
                <span key={tag} className={blogStyles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </header>
        
        <div className={blogStyles.postContent}>
          {/* 実際の記事内容はここに動的に読み込む */}
          <p>記事の内容がここに表示されます。</p>
          <p>実際のプロジェクトでは、MarkdownファイルやCMSから内容を読み込みます。</p>
          
          {/* 記事ID別の内容表示 */}
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
          
          {post.id === 2 && (
            <div>
              <p>Claude CodeでReactマインスイーパーを開発した詳細な記事です。</p>
              <p><a href="/about/blog/2" target="_blank" rel="noopener noreferrer">詳細記事を読む</a></p>
            </div>
          )}
        </div>
        
        <footer className={blogStyles.postFooter}>
          <div className={blogStyles.postNavigation}>
            <button onClick={handleBackClick} className={blogStyles.navLink}>
              ブログ一覧に戻る
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;