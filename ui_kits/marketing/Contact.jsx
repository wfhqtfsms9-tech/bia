function ContactForm() {
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://formspree.io/f/xkokygap", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg((body && body.errors && body.errors.map(x => x.message).join(", ")) || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-form" role="status" aria-live="polite">
        <div className="kicker">RECEIVED</div>
        <h3>Thank you.</h3>
        <p className="contact-line" style={{ marginTop: 8 }}>
          Your message has been received.<br/>
          We&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/xkokygap"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="kicker">A NOTE</div>
      <h3>Send a message</h3>
      <div className="form-field"><label>Full Name</label><input name="name" placeholder="Jane Holloway" required/></div>
      <div className="form-field"><label>Email</label><input name="email" type="email" placeholder="j.holloway@example.com" required/></div>
      <div className="form-field"><label>Subject</label><input name="subject" placeholder="Speaker enquiry, sponsorship, etc." required/></div>
      <div className="form-field"><label>Message</label><textarea name="message" rows="4" placeholder="A few sentences." required/></div>
      <button className="btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "error" && (
        <p className="contact-line" style={{ marginTop: 12, color: "#a33" }}>{errorMsg}</p>
      )}
    </form>
  );
}

function Contact() {
  return (
    <section className="bia-contact" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <div className="kicker">CONTACT</div>
          <h2>By post, or by mail.</h2>
          <div className="contact-block">
            <div className="ck">CORRESPONDENCE</div>
            <p className="contact-line">The Editor<br/>BIA Finance Club<br/>285 Lafayette Street<br/>Bridgeport, CT 06604</p>
          </div>
          <div className="contact-block">
            <div className="ck">EDITORIAL</div>
            <p className="contact-line"><a href="mailto:amnguyen25@my.bridgeportacademy.org">amnguyen25@my.bridgeportacademy.org</a></p>
          </div>
          <div className="contact-block">
            <div className="ck">MEMBERSHIP</div>
            <p className="contact-line"><a href="mailto:amnguyen25@my.bridgeportacademy.org">amnguyen25@my.bridgeportacademy.org</a><br/><a href="mailto:knguyen24@my.bridgeportacademy.org">knguyen24@my.bridgeportacademy.org</a></p>
          </div>
        </div>
        <ContactForm/>
      </div>
    </section>
  );
}
window.Contact = Contact;
