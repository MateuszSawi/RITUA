"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@")) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>
          <Check size={26} strokeWidth={1.6} />
        </span>
        <h3>Dziękujemy za wiadomość</h3>
        <p>
          Odezwiemy się do Ciebie w ciągu 24 godzin. Tymczasem zapraszamy do
          zapoznania się z naszymi realizacjami.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.field}>
        <label htmlFor="name">Imię i nazwisko</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Jan Kowalski"
          required
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="jan@example.com"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Telefon</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+48 000 000 000"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Wiadomość</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Opowiedz nam o swoim projekcie — rodzaj, przestrzeń, oczekiwania…"
        />
      </div>

      <button type="submit" className={styles.submit}>
        Wyślij wiadomość
        <ArrowRight size={18} />
      </button>

      <p className={styles.note}>
        Wypełniając formularz zgadzasz się na kontakt w sprawie zapytania.
      </p>
    </form>
  );
}
