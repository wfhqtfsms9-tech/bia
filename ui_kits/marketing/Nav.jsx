function Nav({ homeHref = "#" }) {
  const h = (hash) => homeHref === "#" ? `#${hash}` : `${homeHref}#${hash}`;
  return (
    <nav className="bia-nav">
      <a className="brand" href={homeHref === "#" ? "#top" : homeHref}>
        <span className="brand-b">BIA</span>
        <span className="brand-rule" />
        <span className="brand-sm">Finance Club</span>
      </a>
      <ul className="nav-links">
        <li><a href={h("about")}>About</a></li>
        <li><a href={h("calendar")}>Calendar</a></li>
        <li><a href={h("research")}>Research</a></li>
        <li><a href={h("membership")}>Membership</a></li>
        <li><a href={h("contact")}>Contact</a></li>
      </ul>
      <a className="nav-cta" href={homeHref === "#" ? "apply.html" : "apply.html"}>Apply</a>
    </nav>
  );
}
window.Nav = Nav;
