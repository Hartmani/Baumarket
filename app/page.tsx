export default function Home() {

  return (

    <main style={{ minHeight: "100vh", padding: "24px", fontFamily: "Arial", background: "#f4f6f8" }}>

      <h1>🏗️ Baumarket</h1>

      <p>Hromadné nákupy stavebního materiálu za lepší ceny.</p>

      <a href="/ytong">

        <button style={btn}>🧱 Ytong</button>

      </a>

      <button style={btn}>🧱 Porotherm</button>

      <button style={btn}>🏠 Střešní krytiny</button>

      <button style={btn}>🧊 Izolace</button>

      <button style={btn}>🪟 Okna</button>

      <section style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "16px" }}>

        <h2>Jak to funguje?</h2>

        <p>1. Vyberete materiál.</p>

        <p>2. Přidáte se k hromadné poptávce.</p>

        <p>3. Baumarket spojí objem a vyjedná lepší cenu.</p>

      </section>

    </main>

  );

}

const btn = {

  width: "100%",

  marginTop: "14px",

  padding: "18px",

  fontSize: "22px",

  borderRadius: "14px",

  border: "none",

  background: "#111827",

  color: "white",

};
