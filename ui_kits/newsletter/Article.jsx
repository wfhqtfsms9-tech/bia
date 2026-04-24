function Article() {
  return (
    <article className="news-article">
      <div className="art-kicker">MACRO · LEAD ESSAY</div>
      <h2 className="art-title">A Soft Landing, Re-examined</h2>
      <p className="art-byline">By <strong>Eleanor Vance</strong> · 12 minute read</p>
      <p className="art-lede">
        The consensus has, almost imperceptibly, shifted again. Six months ago the path was uncertain; today, three of the four desks we surveyed have moved their probability of recession in the next twelve months below twenty percent.
      </p>
      <hr className="art-rule"/>
      <div className="art-body">
        <p className="art-drop">
          <span className="drop">T</span>he question is no longer whether the economy will land softly — that much, briefly, seems agreed — but what kind of soft landing this is, and whether the conditions that have produced it are durable. We think they are not, and the reasons are worth setting down clearly.
        </p>
        <p>
          First, the labor market. Unemployment remains near a fifty-year low, but the composition of recent job gains has narrowed considerably. Health care, government, and leisure account for roughly seventy percent of net additions over the last two quarters. The prime-age participation rate, after climbing impressively through 2024, has stalled.
        </p>
        <figure className="art-figure">
          <img src="../../assets/chart-line.svg" alt=""/>
          <figcaption>FIG. 1 — Equity index, year to date. Solid: BIA composite. Dashed: equal-weighted benchmark. Source: Bloomberg, BIA Research.</figcaption>
        </figure>
        <p>
          Second, the consumer. Aggregate spending has held up, but the credit data tell a more mixed story. Credit-card delinquencies among households earning under $75,000 are at their highest since 2012, and the savings rate, after a brief recovery, has resumed its decline.
        </p>
        <blockquote className="art-quote">
          <p>"The yield curve has been wrong before. It is rarely wrong twice in a row about the same thing."</p>
          <cite>— A managing director, name withheld</cite>
        </blockquote>
        <p>
          Third, and most importantly, the curve. The two-ten spread has now been positive for six consecutive weeks, having spent the prior twenty-three months inverted. Historically, the un-inversion is the signal — not the inversion itself.
        </p>
        <h3>What we are watching next</h3>
        <p>
          Three things on our desk for the coming month: the May employment report, particularly revisions to prior months; the next FOMC meeting and any change in dot-plot dispersion; and credit spreads in high-yield, where the recent compression strikes us as unwarranted.
        </p>
      </div>
      <footer className="art-footer">
        <div className="art-tags">
          <span className="art-tag">MACRO</span>
          <span className="art-tag">RATES</span>
          <span className="art-tag">EMPLOYMENT</span>
        </div>
        <a className="art-share">Share with members →</a>
      </footer>
    </article>
  );
}
window.Article = Article;
