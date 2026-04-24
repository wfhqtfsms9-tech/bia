const APPLY_ENDPOINT = "https://formspree.io/f/xkokygap";

function ApplyForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(APPLY_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="apply-confirmation">
        <div className="kicker">RECEIVED</div>
        <h2>Thank you for applying to BIA Finance Club.</h2>
        <p>We'll be in touch within a few days.</p>
        <div className="sig">— The Editors</div>
      </div>
    );
  }

  return (
    <form className="apply-form" method="POST" action={APPLY_ENDPOINT} onSubmit={onSubmit}>
      <div className="form-field">
        <label><span className="field-num">01</span>Full Name</label>
        <input type="text" name="full_name" required placeholder="Anh Nguyen" />
      </div>

      <div className="form-field">
        <label><span className="field-num">02</span>Grade</label>
        <select name="grade" required defaultValue="">
          <option value="" disabled>Select your grade</option>
          <option>9th</option>
          <option>10th</option>
          <option>11th</option>
          <option>12th</option>
        </select>
      </div>

      <div className="form-field">
        <label><span className="field-num">03</span>Email</label>
        <input type="email" name="email" required placeholder="you@my.bridgeportacademy.org" />
      </div>

      <div className="form-field">
        <label><span className="field-num">04</span>Why do you want to join BIA Finance Club?</label>
        <textarea name="why" required rows="6" placeholder="A thoughtful paragraph or two." />
        <div className="field-hint">200–300 words.</div>
      </div>

      <div className="form-field">
        <label><span className="field-num">05</span>What interests you most?</label>
        <select name="interest" required defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Stocks & Equities</option>
          <option>Crypto & Digital Assets</option>
          <option>Real Estate</option>
          <option>Macroeconomics</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="form-field">
        <label><span className="field-num">06</span>How did you hear about us?</label>
        <input type="text" name="heard_from" placeholder="A friend, a teacher, a flyer…" />
      </div>

      <input type="hidden" name="_subject" value="New BIA Finance Club application" />

      <div className="apply-submit">
        <button type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Submit Application"}
        </button>
      </div>
      {error && <p className="apply-note" style={{color: "var(--down, #a32)"}}>{error}</p>}
    </form>
  );
}
window.ApplyForm = ApplyForm;
