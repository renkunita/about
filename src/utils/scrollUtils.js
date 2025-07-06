// ヘッダーの高さを動的に取得する関数
export const getHeaderHeight = () => {
  const header = document.querySelector('[class*="headerContainer"]');
  return header ? header.offsetHeight : 0;
};

// 指定した要素までスムーズにスクロールする関数
export const scrollToSection = (elementId, offset = 20) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = getHeaderHeight();
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerHeight - offset;
    
    window.scrollTo({
      top: Math.max(0, offsetPosition), // 負の値にならないように調整
      behavior: 'smooth'
    });
  }
};

// セレクターを使用して要素までスクロールする関数
export const scrollToElement = (selector, offset = 20) => {
  const element = document.querySelector(selector);
  if (element) {
    const headerHeight = getHeaderHeight();
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerHeight - offset;
    
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }
};

// レスポンシブ対応のリサイズハンドラー
export const handleResize = (callback) => {
  let resizeTimer;
  const handleResizeEvent = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (callback) callback();
    }, 100); // デバウンス処理
  };
  
  window.addEventListener('resize', handleResizeEvent);
  
  // クリーンアップ関数を返す
  return () => {
    window.removeEventListener('resize', handleResizeEvent);
    clearTimeout(resizeTimer);
  };
};