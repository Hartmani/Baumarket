"use client";

import Link from "next/link";

import { useState } from "react";

export default function YtongPage() {

  const [sent, setSent] = useState(false);

  if (sent) {

    return (

      <main style={{ padding: "20px" }}>

        <Link href="/">← Zpět na Baumarket</Link>

        <br />

        <br />

        <h1>Děkujeme ✅</h1>

        <p>Zařadili jsme vás do hromadné poptávky.</p>

      </main>

    );

  }

  return (

    <main style={{ padding: "20px" }}>

      <Link href="/">← Zpět na Baumarket</Link>

      <h1>🧱 Ytong</h1>

      <p>Přidejte se k hromadnému nákupu Ytongu.</p>

      <input

        placeholder="Počet m²"

        style={{

          width: "100%",

          padding: "10px",

          marginBottom: "10px"

        }}

      />

      <input

        placeholder="Telefon"

        style={{

          width: "100%",

          padding: "10px",

          marginBottom: "10px"

        }}

      />

      <button

        onClick={() => setSent(true)}

        style={{

          padding: "12px 20px",

          background: "green",

          color: "white",

          border: "none",

          borderRadius: "8px"

        }}

      >

        Odeslat poptávku

      </button>

    </main>

  );

}
