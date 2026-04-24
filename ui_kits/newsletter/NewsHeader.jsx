function NewsHeader() {
  return (
    <header className="news-header">
      <div className="nh-top">
        <span className="nh-vol">VOL. VII · NO. 18</span>
        <span className="nh-tagline">A Weekly Letter on Markets, Published by BIA</span>
        <span className="nh-date">Thursday, April 23, 2026</span>
      </div>
      <div className="nh-mast">
        <h1>The Commentary</h1>
      </div>
      <div className="nh-bottom">
        <div className="nh-eyebrow">FROM THE EDITOR</div>
        <div className="nh-rule"></div>
        <div className="nh-issue">$0.00 · For Members</div>
      </div>
    </header>
  );
}
window.NewsHeader = NewsHeader;
