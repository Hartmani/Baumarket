export default function Home() {

  return (

    <main

      style={{

        minHeight: "100vh",

        padding: "32px",

        fontFamily: "Arial",

        background:

          "linear-gradient(135deg, #0f172a 0%, #1f2937 45%, #f97316 100%)",

        color: "white",

      }}

    >

      <h1 style={{ fontSize: "56px" }}>🏠 Baumarket</h1>

      <p style={{ fontSize: "24px" }}>

        Spojujeme stavebníky ve Středočeském kraji.

      </p>

      <div style={{ display: "grid", gap: "14px", marginTop: "30px" }}>

        <button style={btn}>🏢 Firmy</button>

        <button style={btn}>👷 Řemeslníci</button>

        <button style={btn}>🧱 Materiál</button>

        <button style={btn}>📋 Poptávky</button>

        <button style={btn}>☎️ Kontakt</button>

      </div>

      <section style={card}>

        <h2>⭐ Nové firmy</h2>

        <p>🏠 Stavby Novák s.r.o.</p>

        <p>⚡ Elektro Kladno</p>

        <p>🪚 Truhlářství Beneš</p>

      </section>

    </main>

  );

}

const btn = {

  background: "white",

  color: "#111827",

  border: "none",

  padding: "18px",

  borderRadius: "18px",

  fontSize: "22px",

  fontWeight: "bold",

};

const card = {

  background: "white",

  color: "black",

  padding: "24px",

  borderRadius: "24px",

  marginTop: "32px",

};
