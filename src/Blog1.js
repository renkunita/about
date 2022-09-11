import React from "react";
import topimage from "./image/mountains-190055.jpg";
import CodeBlock from "./CodeBlock";
import "./BlogTemp.css"

export default (props) => {
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
      <div className="topimage">
          <img
            src={topimage}
            alt="フリー画像"
          />
      </div>
      
      <div className="content">
      <h1>GitHub PagesにReactをデプロイする</h1>
      <p className="blogDate">2022/09/08</p>
      
      <p>package.jsonに追記する</p>
      <CodeBlock md={packageJson1}/>

      <p>リモートリポジトリの追加を行う</p>
      <CodeBlock md={markdown2}/>

      <p>デプロイする</p>
      <CodeBlock md={markdown3}/>
      <p>その後vimの編集画面が出るのでshift+zを二回打って終了させてgit commit, pushを行う</p>

      <br/>

      <h2>参考</h2>
      <ul>
      <li><a href="https://qiita.com/tat_mae084/items/745761eee6cd1d42949d">ReactをGitHub Pagesにデプロイしよう</a></li>
      <li><a href="https://dev-yakuza.posstree.com/react/github-pages/">[React] GitHub Pagesにデプロイ</a></li>
      </ul>


      </div> 
      </>
    );
  };
  