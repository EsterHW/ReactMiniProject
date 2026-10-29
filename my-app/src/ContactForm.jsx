//טופס יצירת קשר עם שדות שם, דוא"ל והודעה. הוא משתמש ב־state כדי לשמור את הערכים ולהציג הודעת הצלחה לאחר השליחה.
//הטופס מדגים טיפול בשליחה בצד הלקוח בלבד. הוא אינו שולח הודעה לשרת או לדוא"ל בפועל.
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    setSubmitted(true);
  }

  function handleChange() {
    setSubmitted(false);
  }

  return (
    <section className="contact-form">
      <h2>צור קשר</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">שם מלא:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            handleChange();
          }}
          required
        />

        <label htmlFor="email">דוא"ל:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            handleChange();
          }}
          required
        />

        <label htmlFor="message">הודעה:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            handleChange();
          }}
          required
        />

        <button type="submit">שליחת הודעה</button>
      </form>

      {submitted && (
        <p className="success-message">
          תודה {name}, ההודעה נשלחה בהצלחה!
        </p>
      )}
    </section>
  );
}

export default ContactForm;
