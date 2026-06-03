"use client";

import Link from "next/link";

import { useState } from "react";

const WEB_APP_URL = "SEM_POZDĚJI_VLOŽÍME_ODKAZ_Z_GOOGLE_SCRIPTU";

export default function YtongPage() {

  const [sent, setSent] = useState(false);

  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({

    name: "",

    phone: "",

    email: "",

    location: "",

    amount: "",

    note: "",

  });

  function update(field: string, value: string) {

    setForm({ ...form, [field]: value });

  }

  async function submitForm() {

    if (!form.name || !form.phone || !form.location || !form.amount) {

      alert("Vyplňte prosím jméno, telefon, město/PSČ a množství.");

      return;

    }

    setSending(true);

    try {

      await fetch(WEB_APP_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {

          "Content-Type": "text/plain",

        },

        body: JSON.stringify({

          material: "Ytong",

          name: form.name,

          phone: form.phone,

          email: form.email,

          location: form.location,

          amount: form.amount,

          note: form.note,

          createdAt: new Date().toISOString(),

        }),

      });

      setSent(true);

    } catch (error) {

      alert("Poptávku se nepodařilo odeslat. Zkuste to prosím znovu.");

    }

    setSending(false);

  }

  if (sent) {

    return (

      <main style={page}>

        <div style={card}>

          <Link href="/" style={back}>

            ← Zpět na Baumarket

          </Link>

          <h1 style={successTitle}>🎉 Děkujeme!</h1>

          <p style={successText}>

            Vaše poptávka byla zařazena do hromadného nákupu Ytongu.

          </p>

        </div>

      </main>

    );

  }

  return (

    <main style={page}>

      <div style={card}>

        <Link href="/" style={back}>

          ← Zpět na Baumarket

        </Link>

        <div style={badge}>AKTUÁLNÍ KAMPAŇ</div>

        <h1 style={title}>🧱 Ytong</h1>

        <p style={subtitle}>

          Připojte se k hromadné objednávce Ytongu a získejte lepší cenu díky

          většímu objemu nákupu.

        </p>

        <div style={stats}>

          <div style={statBox}>

            <strong>12</strong>

            <span>stavebníků</span>

          </div>

          <div style={statBox}>

            <strong>2 450 m²</strong>

            <span>aktuálně poptáno</span>

          </div>

        </div>

        <div style={formBox}>

          <input

            style={input}

            placeholder="Jméno a příjmení"

            value={form.name}

            onChange={(e) => update("name", e.target.value)}

          />

          <input

            style={input}

            placeholder="Telefon"

            value={form.phone}

            onChange={(e) => update("phone", e.target.value)}

          />

          <input

            style={input}

            placeholder="E-mail"

            value={form.email}

            onChange={(e) => update("email", e.target.value)}

          />

          <input

            style={input}

            placeholder="Město / PSČ"

            value={form.location}

            onChange={(e) => update("location", e.target.value)}

          />

          <input

            style={input}

            placeholder="Požadované množství"

            value={form.amount}

            onChange={(e) => update("amount", e.target.value)}

          />

          <textarea

            style={textarea}

            placeholder="Poznámka"

            value={form.note}

            onChange={(e) => update("note", e.target.value)}

          />

          <button style={button} onClick={submitForm} disabled={sending}>

            {sending ? "Odesílám..." : "Přidat do hromadné poptávky"}

          </button>

        </div>

      </div>

    </main>

  );

}

const page = {

  minHeight: "100vh",

  background: "#f3f4f6",

  padding: "20px",

  fontFamily: "Arial, sans-serif",

};

const card = {

  maxWidth: "700px",

  margin: "0 auto",

  background: "white",

  borderRadius: "28px",

  padding: "24px",

  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",

};

const back = {

  textDecoration: "none",

  color: "#f97316",

  fontWeight: "bold",

};

const badge = {

  display: "inline-block",

  background: "#f97316",

  color: "white",

  padding: "8px 12px",

  borderRadius: "999px",

  fontSize: "12px",

  fontWeight: "bold",

  marginTop: "16px",

};

const title = {

  fontSize: "42px",

  marginBottom: "10px",

};

const subtitle = {

  color: "#4b5563",

  fontSize: "18px",

  lineHeight: "1.4",

};

const stats = {

  display: "grid",

  gridTemplateColumns: "1fr 1fr",

  gap: "12px",

  marginTop: "20px",

  marginBottom: "20px",

};

const statBox = {

  background: "#f3f4f6",

  padding: "16px",

  borderRadius: "16px",

  textAlign: "center" as const,

};

const formBox = {

  display: "grid",

  gap: "12px",

};

const input = {

  padding: "14px",

  borderRadius: "12px",

  border: "1px solid #d1d5db",

  fontSize: "16px",

};

const textarea = {

  padding: "14px",

  borderRadius: "12px",

  border: "1px solid #d1d5db",

  minHeight: "100px",

  fontSize: "16px",

};

const button = {

  background: "#f97316",

  color: "white",

  border: "none",

  borderRadius: "16px",

  padding: "16px",

  fontSize: "18px",

  fontWeight: "bold",

};

const successTitle = {

  fontSize: "36px",

};

const successText = {

  fontSize: "18px",

  color: "#4b5563",

};
