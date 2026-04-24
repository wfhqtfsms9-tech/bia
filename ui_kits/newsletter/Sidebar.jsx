function Sidebar() {
  return (
    <aside className="news-sidebar">
      <section className="sb-block">
        <div className="sb-h">In This Issue</div>
        <ol className="sb-toc">
          <li><a><span className="sb-num">01</span> A Soft Landing, Re-examined<br/><span className="sb-meta">Vance · Macro</span></a></li>
          <li><a><span className="sb-num">02</span> The Quiet Bid Beneath Mid-Caps<br/><span className="sb-meta">Iyer · Equities</span></a></li>
          <li><a><span className="sb-num">03</span> What the Distressed Desk is Watching<br/><span className="sb-meta">Holloway · Credit</span></a></li>
          <li><a><span className="sb-num">04</span> Three Things This Week<br/><span className="sb-meta">Chen · Markets</span></a></li>
          <li><a><span className="sb-num">05</span> Letters to the Editor<br/><span className="sb-meta">Members</span></a></li>
        </ol>
      </section>
      <section className="sb-block sb-data">
        <div className="sb-h">Market Snapshot</div>
        <div className="sb-meta">As of close, Wed Apr 22</div>
        <table className="sb-table">
          <tbody>
            <tr><td>S&amp;P 500</td><td className="num">4,872.31</td><td className="num up">+0.42%</td></tr>
            <tr><td>Dow</td><td className="num">38,215.50</td><td className="num up">+0.18%</td></tr>
            <tr><td>Nasdaq</td><td className="num">15,712.04</td><td className="num dn">−0.31%</td></tr>
            <tr><td>10Y UST</td><td className="num">4.41%</td><td className="num up">+3 bp</td></tr>
            <tr><td>DXY</td><td className="num">104.82</td><td className="num dn">−0.22%</td></tr>
            <tr><td>Brent</td><td className="num">$87.14</td><td className="num up">+1.04%</td></tr>
            <tr><td>Gold</td><td className="num">$2,338.90</td><td className="num up">+0.55%</td></tr>
          </tbody>
        </table>
      </section>
      <section className="sb-block">
        <div className="sb-h">From the Archive</div>
        <a className="sb-link">A Brief History of Inversions <span className="sb-vol">VOL. VI · NO. 11</span></a>
        <a className="sb-link">On the Reading of Footnotes <span className="sb-vol">VOL. V · NO. 03</span></a>
        <a className="sb-link">The Patience of Capital <span className="sb-vol">VOL. IV · NO. 22</span></a>
      </section>
    </aside>
  );
}
window.Sidebar = Sidebar;
