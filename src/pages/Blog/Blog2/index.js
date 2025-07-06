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
            <h1 className={blogStyles.postTitle}>Claude CodeでReactマインスイーパーを改善した話</h1>
            <div className={blogStyles.postTags}>
              <span className={blogStyles.tag}>React</span>
              <span className={blogStyles.tag}>Claude Code</span>
              <span className={blogStyles.tag}>AI開発</span>
              <span className={blogStyles.tag}>マインスイーパー</span>
              <span className={blogStyles.tag}>リファクタリング</span>
            </div>
          </header>
          
          <div className={blogStyles.postContent}>
            <p>新しいAI開発環境である<strong>Claude Code</strong>を使って、既存のReactマインスイーパーゲームの改善に取り組みました。AIとペアプログラミングをするような感覚で開発できる体験は、これまでとは全く違うものでした。</p>
            
            <h2>Claude Codeとは？</h2>
            <p>Claude CodeはAnthropic社が提供するAI開発環境で、自然言語でコードの作成・修正・デバッグができるツールです。ターミナルから直接使用でき、ファイルの読み書きやコマンド実行も可能で、まるでAIエンジニアと一緒に開発しているような体験ができます。</p>
            
            <h2>既存プロジェクトの分析</h2>
            <p>まずは既存のマインスイーパープロジェクトをClaude Codeに分析してもらいました：</p>
            <CodeBlock md={setupCode}/>
            
            <h2>改善ポイントをAIと特定</h2>
            <p>「このマインスイーパーをより良くしたい」と相談すると、Claude Codeは以下のような改善点を提案してくれました：</p>
            <ul>
              <li><strong>UI/UXの改善</strong>：より直感的で現代的なデザイン</li>
              <li><strong>パフォーマンス最適化</strong>：React.memoやuseMemoの活用</li>
              <li><strong>アクセシビリティ向上</strong>：キーボード操作対応</li>
              <li><strong>機能拡張</strong>：難易度選択、統計機能の追加</li>
              <li><strong>コード品質向上</strong>：TypeScript化、テスト追加</li>
            </ul>
            
            <h2>段階的な改善プロセス</h2>
            <p>既存のゲーム状態管理を、Claude Codeと一緒により効率的な形に改良しました：</p>
            <CodeBlock md={gameStateCode}/>
            
            <h3>リファクタリングのポイント</h3>
            <p>既存のセルクリック処理を見直し、Claude Codeと一緒にパフォーマンスを向上させました：</p>
            <CodeBlock md={cellLogicCode}/>
            
            <h2>デザイン改善のこだわり</h2>
            <p>既存のシンプルなデザインを、Claude Codeと一緒により洗練されたものに改良しました：</p>
            <ul>
              <li><strong>ニューモーフィズムデザイン</strong>：平面的だったボタンを立体的で現代的な見た目に</li>
              <li><strong>カラーコーディング強化</strong>：数字ごとの色分けをより鮮明に改善</li>
              <li><strong>アニメーション追加</strong>：セルクリック時の滑らかな遷移効果を新規実装</li>
              <li><strong>レスポンシブ対応強化</strong>：既存のモバイル対応をより快適に改良</li>
            </ul>
            
            <h2>改善作業で感じたClaude Codeの魅力</h2>
            
            <h3>1. 既存コードの深い理解</h3>
            <p>「この連鎖処理の部分をもっと効率化したい」と相談すると、既存のコードを読み解いて、具体的な改善案を提示してくれました。既存のロジックを壊すことなく、より良い実装を提案してくれるのが印象的でした。</p>
            
            <h3>2. 段階的リファクタリングの提案</h3>
            <p>大きなコンポーネントを一気に変更するのではなく、「まずこの部分から分割して、その後でこちらを改善しましょう」と段階的なアプローチを提案してくれます。</p>
            
            <h3>3. レガシーコード改善の手助け</h3>
            <p>「この古い書き方を現代的にしたい」という相談では、React Hooksへの移行や、最新のベストプラクティスに沿った改善を具体的にサポートしてくれました。</p>
            
            <h2>改善版のデプロイ</h2>
            <p>改善作業完了後、既存のGitHub Pagesを更新しました：</p>
            <CodeBlock md={deployCode}/>
            
            <h2>改善されたゲームで遊んでみる</h2>
            <p>改善されたマインスイーパーは以下のURLで実際にプレイできます：</p>
            <p><a href="https://renkunita.github.io/react-minesweeper/" target="_blank" rel="noopener noreferrer">🎮 改善版 React Minesweeper で遊ぶ</a></p>
            
            <h2>まとめ：AI支援による効率的な改善作業</h2>
            <p>Claude Codeでの改善作業を通じて感じたのは、<strong>「既存コードの改善がこれまでより遥かに効率的になった」</strong>ということです。</p>
            
            <p>従来のリファクタリングは「どの部分をどう変更するか」の判断に時間がかかっていましたが、Claude Codeがあることで「より良いユーザー体験の実現」により集中できるようになりました。</p>
            
            <p>特に改善作業において以下の点で大きな効率化を感じました：</p>
            <ul>
              <li><strong>コード分析の高速化</strong>：既存コードの問題点や改善点を素早く特定</li>
              <li><strong>リファクタリング品質の向上</strong>：段階的で安全な改善プロセスの提案</li>
              <li><strong>最新技術への移行支援</strong>：レガシーコードを現代的な書き方へスムーズに移行</li>
              <li><strong>テスト駆動改善</strong>：改善前後の動作を確認しながら安全に作業を進行</li>
            </ul>
            
            <p>AI開発ツールは新規開発だけでなく、既存プロジェクトの改善においても非常に強力なパートナーになることを実感しました。今後もClaude Codeを活用して、既存のプロジェクトをより良いものに育てていきたいと思います！</p>
            
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