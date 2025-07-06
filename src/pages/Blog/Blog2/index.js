import React from "react";
import { CodeBlock } from "../../../components";
import homeStyles from "../../Home/Home.module.css";
import blogStyles from "../BlogPost/BlogPost.module.css";
import usePageTracking from "../../../hooks/usePageTracking";

const Blog2 = (props) => {
  usePageTracking();
  
  const handleBackClick = () => {
    window.location.href = '/about/blog';
  };
  
  const setupCode = `~~~bash
# プロジェクトセットアップ
$ npx create-react-app react-minesweeper
$ cd react-minesweeper
$ npm start
~~~`;

  const gameStateCode = `~~~javascript
// ゲーム状態の管理
const [board, setBoard] = useState([]);
const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
const [mineCount, setMineCount] = useState(10);
const [firstClick, setFirstClick] = useState(true);
~~~`;

  const cellLogicCode = `~~~javascript
// セルクリック時の処理
const handleCellClick = (row, col) => {
  if (gameStatus !== 'playing') return;
  
  const newBoard = [...board];
  const cell = newBoard[row][col];
  
  if (cell.isFlagged || cell.isRevealed) return;
  
  if (cell.isMine) {
    // ゲームオーバー
    setGameStatus('lost');
    revealAllMines(newBoard);
  } else {
    // セルを開く（連鎖処理含む）
    revealCell(newBoard, row, col);
    checkWinCondition(newBoard);
  }
  
  setBoard(newBoard);
};
~~~`;

  const deployCode = `~~~bash
# GitHub Pagesへのデプロイ
$ npm run build
$ gh-pages -d build
~~~`;

    return (
      <>
      <div className={homeStyles.content}>
        <article className={blogStyles.blogPost}>
          <header className={blogStyles.postHeader}>
            <div className={blogStyles.postMeta}>
              <button onClick={handleBackClick} className={blogStyles.backLink}>
                ← ブログ一覧に戻る
              </button>
              <time className={blogStyles.postDate}>2025/01/06</time>
            </div>
            <h1 className={blogStyles.postTitle}>Claude CodeでReactマインスイーパーを開発した話</h1>
            <div className={blogStyles.postTags}>
              <span className={blogStyles.tag}>React</span>
              <span className={blogStyles.tag}>Claude Code</span>
              <span className={blogStyles.tag}>AI開発</span>
              <span className={blogStyles.tag}>マインスイーパー</span>
            </div>
          </header>
          
          <div className={blogStyles.postContent}>
            <p>新しいAI開発環境である<strong>Claude Code</strong>を使って、Reactでマインスイーパーゲームを作ってみました。AI とペアプログラミングをするような感覚で開発できる体験は、これまでとは全く違うものでした。</p>
            
            <h2>Claude Codeとは？</h2>
            <p>Claude CodeはAnthropic社が提供するAI開発環境で、自然言語でコードの作成・修正・デバッグができるツールです。ターミナルから直接使用でき、ファイルの読み書きやコマンド実行も可能で、まるでAIエンジニアと一緒に開発しているような体験ができます。</p>
            
            <h2>プロジェクトのセットアップ</h2>
            <p>まずは基本的なReactプロジェクトから始めました：</p>
            <CodeBlock md={setupCode}/>
            
            <h2>ゲーム設計をAIと議論</h2>
            <p>「マインスイーパーを作りたい」と伝えると、Claude Codeは以下のような提案をしてくれました：</p>
            <ul>
              <li>9x9のゲームボードで地雷10個からスタート</li>
              <li>React Hooksを使った状態管理</li>
              <li>再帰的な連鎖オープン機能</li>
              <li>右クリックでのフラグ機能</li>
              <li>タイマーと地雷カウンター</li>
            </ul>
            
            <h2>コア機能の実装</h2>
            <p>ゲーム状態の管理では、Claude Codeが効率的な状態設計を提案してくれました：</p>
            <CodeBlock md={gameStateCode}/>
            
            <h3>セルクリック処理の実装</h3>
            <p>マインスイーパーの核となるセルクリック処理も、Claude Codeと一緒に段階的に構築：</p>
            <CodeBlock md={cellLogicCode}/>
            
            <h2>スタイリングでこだわったポイント</h2>
            <p>単純な機能実装だけでなく、見た目にもこだわりました：</p>
            <ul>
              <li><strong>ニューモーフィズムデザイン</strong>：立体的で現代的な見た目</li>
              <li><strong>カラーコーディング</strong>：数字ごとに色分けして視認性向上</li>
              <li><strong>アニメーション効果</strong>：セルクリック時の滑らかな遷移</li>
              <li><strong>レスポンシブ対応</strong>：スマホでも快適にプレイ可能</li>
            </ul>
            
            <h2>開発中に感じたClaude Codeの魅力</h2>
            
            <h3>1. コンテキストを理解した提案</h3>
            <p>「地雷が周囲にない場合の連鎖処理が上手く動かない」と相談すると、コードを見てすぐに再帰処理の改善点を指摘してくれました。</p>
            
            <h3>2. リファクタリングの手助け</h3>
            <p>コンポーネントが巨大になってきた時、「この部分を別コンポーネントに分割しましょう」と適切な分割を提案してくれます。</p>
            
            <h3>3. エラーデバッグの効率化</h3>
            <p>エラーメッセージをそのまま伝えると、原因と解決策を的確に教えてくれるので、デバッグ時間が大幅に短縮されました。</p>
            
            <h2>デプロイとCI/CD</h2>
            <p>最終的にGitHub Pagesでデプロイしました：</p>
            <CodeBlock md={deployCode}/>
            
            <h2>完成したゲームで遊んでみる</h2>
            <p>完成したマインスイーパーは以下のURLで実際にプレイできます：</p>
            <p><a href="https://renkunita.github.io/react-minesweeper/" target="_blank" rel="noopener noreferrer">🎮 React Minesweeper で遊ぶ</a></p>
            
            <h2>まとめ：AI開発時代の到来</h2>
            <p>Claude Codeでの開発体験を通じて感じたのは、<strong>「プログラミングがより創造的な作業になった」</strong>ということです。</p>
            
            <p>従来は「どう実装するか」に時間を取られていましたが、Claude Codeがあることで「何を作るか」「ユーザーにどんな体験を提供するか」により集中できるようになりました。</p>
            
            <p>特に以下の点で大きな変化を感じました：</p>
            <ul>
              <li><strong>学習効率の向上</strong>：新しい技術やライブラリを使う際の学習コストが大幅に削減</li>
              <li><strong>品質の向上</strong>：コードレビューやベストプラクティスの提案により、より良いコードが書ける</li>
              <li><strong>開発速度の向上</strong>：ボイラープレートコードの自動生成により、核心部分に集中できる</li>
            </ul>
            
            <p>AI開発ツールはもはや実験的なものではなく、実際の開発で活用できる実用的なツールになったと実感しています。今後もClaude Codeを活用して、より面白いプロジェクトに挑戦していきたいと思います！</p>
            
            <h2>参考リンク</h2>
            <ul>
              <li><a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">Claude Code 公式サイト</a></li>
              <li><a href="https://github.com/renkunita/react-minesweeper" target="_blank" rel="noopener noreferrer">マインスイーパーのソースコード (GitHub)</a></li>
              <li><a href="https://renkunita.github.io/react-minesweeper/" target="_blank" rel="noopener noreferrer">デプロイ済みのゲーム</a></li>
            </ul>
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
      </>
    );
};

export default Blog2;