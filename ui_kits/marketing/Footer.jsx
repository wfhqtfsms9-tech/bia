function Footer({ homeHref = "#" }) {
  const h = (hash) => homeHref === "#" ? `#${hash}` : `${homeHref}#${hash}`;
  return (
    <footer className="bia-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="fb-mark">BIA</div>
          <div className="fb-tag">Finance Club · Bridgeport, CT · MMXXV</div>
          <p className="fb-mission">A society for the serious student of markets.</p>
        </div>
        <div className="footer-cols">
          <div>
            <div className="fc-h">The Club</div>
            <a href={h("about")}>About</a>
            <a href={h("about")}>Leadership</a>
            <a href={h("calendar")}>Calendar</a>
            <a href={h("membership")}>Membership</a>
          </div>
          <div>
            <div className="fc-h">Publications</div>
            <span className="fc-plain">Coming Soon</span>
          </div>
          <div>
            <div className="fc-h">Contact</div>
            <a href={h("membership")}>Membership</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 BIA Finance Club. All rights reserved.</span>
        <span>Bridgeport International Academy.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
