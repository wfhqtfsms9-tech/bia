function Membership() {
  return (
    <section className="bia-membership" id="membership">
      <div className="mem-inner">
        <div className="mem-left">
          <div className="kicker gold-on-dark">MEMBERSHIP</div>
          <h2>We read every application.</h2>
          <p className="lede">
            Applications are open year-round. We review on a rolling basis.
          </p>
          <div className="mem-actions">
            <a className="btn-gold" href="apply.html">Apply for Membership</a>
          </div>
        </div>
        <div className="mem-right">
          <div className="criteria">
            <div className="crit-row">
              <div className="crit-num">01</div>
              <div>
                <h4>A point of view</h4>
                <p>Short answer 200–300 words — &ldquo;What market interests you and why?&rdquo;</p>
              </div>
            </div>
            <div className="crit-row">
              <div className="crit-num">02</div>
              <div>
                <h4>Time</h4>
                <p>Active participation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Membership = Membership;
