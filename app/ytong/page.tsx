"use client";
import Link from "next/link";

import { useState } from "react";

export default function YtongPage() {

  const [sent, setSent] = useState(false);

  if (sent) {

    return (

      <main style={page}>
    <Link href="/">

  ← Zpět na Baumarket

</Link>

<br />

<br />
        <h1>Děkujeme ✅</h1>

        <p>Zařadili jsme vás do hromadné poptávky Ytong.</p>

      </main>

    );

  }

  return (

    <main style={page}>

      <h1>Ytong 300</h1>

      <p>Přidejte se k hromadnému nákupu.</p>

      <form

        onSubmit={(e) => {

          e.preventDefault();

          setSent(true);

        }}

        style={{ display: "grid", gap: "14px", marginTop: "24px" }}

      >

        <input style={input} placeholder="Jméno" required />

        <input style={input} placeholder="Telefon" required />

        <input style={input} placeholder="Email" required />

        <input style={input} placeholder="Množství, např. 12 palet" required />

        <input style={input} placeholder="Město / okres" required />

        <textarea style={input} placeholder="Poznámka" rows={5} />

        <button style={button}>Přidat se k nákupu</button>

      </form>

    </main>

  );

}

const page = {

  minHeight: "100vh",

  padding: "24px",

  fontFamily: "Arial",

  background: "#111827",

  color: "white",

};

const input = {

  padding: "16px",

  borderRadius: "14px",

  border: "none",

  fontSize: "18px",

};

const button = {

  padding: "18px",

  borderRadius: "16px",

  border: "none",

  background: "#f97316",

  color: "white",

  fontSize: "20px",

  fontWeight: "bold",

};
