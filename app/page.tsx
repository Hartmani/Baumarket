export default function Home() {

  return (

    <main style={{ minHeight: "100vh", padding: "24px", fontFamily: "Arial" }}>

      <h1>🏗️ Baumarket</h1>

      <p>Hromadné nákupy stavebního materiálu za lepší ceny.</p>

      <a href="/ytong">

        <button style={btn}>🧱 Ytong</button>

      </a>

      <a href="/porotherm">

        <button style={btn}>🧱 Porotherm</button>

      </a>

      <a href="/strecha">

        <button style={btn}>🏠 Střešní krytiny</button>

      </a>

      <a href="/izolace">

        <button style={btn}>🧊 Izolace</button>

      </a>

      <section style={{ marginTop: "30px" }}>

        <h2>Jak to funguje?</h2>

        <ol>

          <li>Vyberete materiál.</li>

          <li>Zadáte množství a kontakt.</li>

          <li>Spojíme více zájemců.</li>

          <li>Vyjednáme lepší cenu u dodavatele.</li>

        </ol>

      </section>

    </main>

  );

}

const btn = {

  display: "block",

  width: "100%",

  padding: "18px",

  marginBottom: "14px",

  fontSize: "22px",

  borderRadius: "14px",

  border: "none",

  background: "#111827",

  color: "white",

  fontWeight: "bold",

};
