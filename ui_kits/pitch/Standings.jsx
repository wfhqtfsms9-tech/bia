const TEAMS = [
  { rank: "01", name: "Team Halcyon", thesis: "Long ASML — the bottleneck thesis revisited", sector: "SEMIS", ret: "+34.2%", conviction: 9 },
  { rank: "02", name: "Team Ironwood", thesis: "Long PGR — a quiet compounding machine in P&C", sector: "INSUR", ret: "+28.7%", conviction: 8 },
  { rank: "03", name: "Team Meridian", thesis: "Long FERG — the Sunbelt distribution leverage", sector: "INDUS", ret: "+22.1%", conviction: 7 },
  { rank: "04", name: "Team Quill", thesis: "Long DECK — Hoka has another two years to run", sector: "CONS", ret: "+19.3%", conviction: 7 },
  { rank: "05", name: "Team Ferrum", thesis: "Long CNQ — energy capital discipline thesis", sector: "ENGY", ret: "+12.8%", conviction: 6 },
  { rank: "06", name: "Team Lighthouse", thesis: "Long TROW — fee compression has bottomed", sector: "ASSET", ret: "+8.4%", conviction: 6 },
];

function Standings() {
  return (
    <section className="standings">
      <header className="section-head">
        <div className="kicker">STANDINGS · AS OF APRIL 22</div>
        <h2>The Leaderboard</h2>
        <p className="section-sub">Returns measured against the date of submission. Final judging on June 20.</p>
      </header>
      <table className="st-table">
        <thead>
          <tr><th>#</th><th>Team</th><th>Thesis</th><th>Sector</th><th className="num">Return</th><th className="num">Conviction</th></tr>
        </thead>
        <tbody>
          {TEAMS.map((t, i) => (
            <tr key={i} className={i === 0 ? "leader" : ""}>
              <td className="rank">{t.rank}</td>
              <td><strong>{t.name}</strong></td>
              <td className="thesis"><em>{t.thesis}</em></td>
              <td><span className="sector-tag">{t.sector}</span></td>
              <td className="num up">{t.ret}</td>
              <td className="num">
                <span className="conv">
                  {Array.from({length: 10}).map((_, j) => (
                    <span key={j} className={"conv-dot" + (j < t.conviction ? " on" : "")}/>
                  ))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
window.Standings = Standings;
