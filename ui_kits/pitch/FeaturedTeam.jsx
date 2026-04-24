function FeaturedTeam() {
  return (
    <section className="featured-team">
      <div className="ft-side">
        <div className="ft-rank">01</div>
        <div className="ft-rule"></div>
        <div className="ft-label">CURRENT LEADER</div>
      </div>
      <div className="ft-main">
        <div className="ft-kicker">SEMIS · LONG · 18-MONTH HORIZON</div>
        <h2>Team Halcyon</h2>
        <p className="ft-thesis">"Long ASML — the bottleneck thesis revisited."</p>
        <div className="ft-roster">
          <div className="ft-member"><div className="ft-pic"><img src="../../assets/portrait-placeholder.svg"/></div><div><div className="ft-name">Sarah Ahmed</div><div className="ft-firm">Lead Analyst · Macquarie</div></div></div>
          <div className="ft-member"><div className="ft-pic"><img src="../../assets/portrait-placeholder.svg"/></div><div><div className="ft-name">David Park</div><div className="ft-firm">Modeling · Citi</div></div></div>
          <div className="ft-member"><div className="ft-pic"><img src="../../assets/portrait-placeholder.svg"/></div><div><div className="ft-name">Olivia Brand</div><div className="ft-firm">Channel Checks · DB</div></div></div>
        </div>
        <div className="ft-stats">
          <div><div className="fts-k">ENTRY</div><div className="fts-v mono">€612.40</div></div>
          <div><div className="fts-k">CURRENT</div><div className="fts-v mono">€821.92</div></div>
          <div><div className="fts-k">RETURN</div><div className="fts-v mono up">+34.2%</div></div>
          <div><div className="fts-k">PRICE TARGET</div><div className="fts-v mono">€1,050</div></div>
        </div>
        <a className="ft-cta">Read the full memo →</a>
      </div>
      <div className="ft-chart">
        <img src="../../assets/chart-line.svg"/>
      </div>
    </section>
  );
}
window.FeaturedTeam = FeaturedTeam;
