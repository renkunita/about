import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";
import "../../Home/Home.module.css";
import "../BlogPost/BlogPost.module.css";
import usePageTracking from "../../../hooks/usePageTracking";

export default (props) => {
  usePageTracking();
  
  const handleBackClick = () => {
    window.location.href = '/about/blog';
  };
  
  const packageJson1 = `~~~json
    ...
    "homepage": "https://<GitHubアカウント名>.github.io/<GitHubリポジトリ名>/",
    ...
    "scripts": {
        ...
        "rm": "rm -rf docs",
        "mv": "mv build docs",
        "git": "git add . && git commit && git push origin master",
        "deploy": "npm run rm && npm run build && npm run mv && npm run git",
        "build": "react-scripts build",
        "postbuild": "cp build/index.html build/404.html",
        ...
      },
    ...
  ~~~
`

const markdown2 = `~~~sh
$ git remote add origin https://github.com/<GitHubアカウント名>/<GitHubリポジトリ名>.git
~~~
`

const markdown3 = `~~~sh
$ npm run deploy
~~~
`

    return (
      <>
      <div className="content">
        <article className="blog-post">
          <header className="post-header">
            <div className="post-meta">
              <button onClick={handleBackClick} className="back-link">
                ← ブログ一覧に戻る
              </button>
              <time className="post-date">2022/09/08</time>
            </div>
            <h1 className="post-title">GitHub PagesにReactをデプロイする</h1>
            <div className="post-tags">
              <span className="tag">React</span>
              <span className="tag">GitHub Pages</span>
              <span className="tag">デプロイ</span>
            </div>
          </header>
          
          <div className="post-content">
            <p>ReactアプリをGitHub Pagesにデプロイする手順を詳しく説明します。</p>
            
            <h2>1. package.jsonの設定</h2>
            <p>まず、package.jsonに必要な設定を追記します：</p>
            <CodeBlock md={packageJson1}/>

            <h2>2. リモートリポジトリの設定</h2>
            <p>GitHubリポジトリをリモートに追加します：</p>
            <CodeBlock md={markdown2}/>

            <h2>3. デプロイの実行</h2>
            <p>設定が完了したら、以下のコマンドでデプロイを実行します：</p>
            <CodeBlock md={markdown3}/>
            <p>実行後、vimエディタが開く場合があります。その際は <code>Shift + Z</code> を2回押してエディタを終了し、git commit と push を完了させてください。</p>

            <h2>参考資料</h2>
            <ul>
              <li><a href="https://qiita.com/tat_mae084/items/745761eee6cd1d42949d" target="_blank" rel="noopener noreferrer">ReactをGitHub Pagesにデプロイしよう</a></li>
              <li><a href="https://dev-yakuza.posstree.com/react/github-pages/" target="_blank" rel="noopener noreferrer">[React] GitHub Pagesにデプロイ</a></li>
            </ul>
          </div>
          
          <footer className="post-footer">
            <div className="post-navigation">
              <button onClick={handleBackClick} className="nav-link">
                ブログ一覧に戻る
              </button>
            </div>
          </footer>
        </article>
      </div> 
      </>
    );
  };
  