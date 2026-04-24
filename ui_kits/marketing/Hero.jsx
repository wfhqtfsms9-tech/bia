function Hero() {
  return (
    <section className="bia-hero" id="top">
      <div className="hero-bg">
        <img src="../../assets/hero-bg.svg" alt="" />
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">ESTABLISHED 2025</div>
        <h1 className="hero-h1">
          A society for the <em>serious student</em> of markets.
        </h1>
        <p className="hero-lede">
          Founded by students who believe anyone can learn to think like an investor.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="apply.html">Apply for Membership</a>
          <a className="btn-ghost-light" href="#calendar">View Calendar →</a>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
