const LEADERS = [
  { name: "Anh Nguyen", role: "FOUNDER", firm: "Bridgeport International Academy" },
];

function Leadership() {
  return (
    <section className="bia-leadership" id="about">
      <header className="section-head">
        <div className="kicker">ABOUT</div>
        <h2>Founded, 2025</h2>
        <p className="section-sub">Growing our team. Positions open to BIA students.</p>
      </header>
      <div className="leader-grid">
        {LEADERS.map((l, i) => (
          <article key={i} className="leader-card">
            <div className="leader-portrait">
              <img src="../../assets/portrait-placeholder.svg" alt="" />
            </div>
            <div className="leader-meta">
              <h4>{l.name}</h4>
              <div className="leader-role">{l.role}</div>
              <div className="leader-firm">{l.firm}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.Leadership = Leadership;
