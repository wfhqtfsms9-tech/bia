const JUDGES = [
  { name: "Helena Park", firm: "Oaktree Capital · Distressed", note: "20 years on the credit side." },
  { name: "Theodore Fuchs", firm: "Tiger Global · Public Equities", note: "Founding member of the Club." },
  { name: "Ines Ortega", firm: "Bridgewater · Macro Research", note: "Author, A Quiet Discipline." },
];

function Judges() {
  return (
    <section className="judges">
      <header className="section-head">
        <div className="kicker">THE JUDGES</div>
        <h2>Three voices, one decision.</h2>
      </header>
      <div className="judge-row">
        {JUDGES.map((j, i) => (
          <article key={i} className="judge-card">
            <div className="judge-portrait"><img src="../../assets/portrait-placeholder.svg" alt=""/></div>
            <h4>{j.name}</h4>
            <div className="judge-firm">{j.firm}</div>
            <p className="judge-note">{j.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
window.Judges = Judges;
