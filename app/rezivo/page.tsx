"use client";

import Link from "next/link";

import { useState } from "react";

export default function RezivoPage() {

  const [sent, setSent] = useState(false);

  if (sent) {

    return (

      <main style={page}>

        <div style={card}>

          <Link href="/" style={back}>

            ← Zpět na Baumarket

          </Link>

          <h1 style={successTitle}>🎉 Děkujeme!</h1>

          <p style={successText}>

            Vaše poptávka byla zařazena do hromadného nákupu střešního řeziva.

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

        <h1 style={title}>🪵 Střešní řezivo</h1>

        <p style={subtitle}>

          Připojte se k hromadné objednávce KVH hranolů, latí, kontralatí,

          fošen a dalšího konstrukčního řeziva.

        </p>

        <div style={stats}>

          <div style={statBox}>

            <strong>11</strong>

            <span>stavebníků</span>

          </div>

          <div style={statBox}>

            <strong>68 m³</strong>

            <span>aktuálně poptáno</span>

          </div>

        </div>

        <div style={form}>

          <input style={input} placeholder="Jméno a příjmení" />

          <input style={input} placeholder="Telefon" />

          <input style={input} placeholder="E-mail" />

          <input style={input} placeholder="Město / PSČ" />

          <input style={input} placeholder="Požadované množství (m³)" />

          <textarea

            style={textarea}

            placeholder="Typ řeziva (KVH, latě, fošny...) a poznámka"

          />

          <button

            style={button}

            onClick={() => setSent(true)}

          >

            Přidat do hromadné poptávky

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

const form = {

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