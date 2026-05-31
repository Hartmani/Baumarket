export default function Home() {

  return (

    <main style={page}>

      <section style={hero}>

        <div style={overlay}>

          <h1 style={title}>Baumarket</h1>

          <p style={subtitle}>

            Spojujeme stavebníky pro hromadné nákupy stavebního materiálu.

          </p>

          <div style={grid}>

            <a href="/ytong" style={link}>

              <button style={card}>🧱<br />Ytong</button>

            </a>

            <a href="/porotherm" style={link}>

              <button style={card}>🧱<br />Porotherm</button>

            </a>

            <a href="/strecha" style={link}>

              <button style={card}>🏠<br />Střešní krytiny</button>

            </a>

            <a href="/izolace" style={link}>

              <button style={card}>🧊<br />Izolace</button>

            </a>

            <a href="/sadrokarton" style={link}>

              <button style={card}>📐<br />Sádrokarton</button>

            </a>

            <a href="/rezivo" style={link}>

              <button style={card}>🪵<br />Střešní řezivo</button>

            </a>
<a href="/pro-dodavatele" style={link}>

  <button style={card}>🤝<br />Pro dodavatele</button>

    </a>
          </div>

        </div>

      </section>

      <section style={infoBox}>

        <h2 style={infoTitle}>Jak Baumarket funguje?</h2>

        <p style={infoText}>

          Vyberete materiál, zadáte přibližné množství a lokalitu.

          Baumarket spojí více stavebníků do jedné větší poptávky.

          Díky vyššímu objemu pak můžeme oslovit dodavatele a vyjednat lepší cenu.

        </p>

        <div style={steps}>

          <div style={step}>1<br />Vyberete materiál</div>

          <div style={step}>2<br />Zadáte množství</div>

          <div style={step}>3<br />Spojíme poptávky</div>

          <div style={step}>4<br />Vyjednáme cenu</div>

        </div>

      </section>

    </main>

  );

}

const page = {

  minHeight: "100vh",

  fontFamily: "Arial, sans-serif",

  background: "#f3f4f6",

};

const hero = {

  minHeight: "72vh",

  padding: "24px",

  backgroundImage:

    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80')",

  backgroundSize: "cover",

  backgroundPosition: "center",

};

const overlay = {

  background: "rgba(17, 24, 39, 0.72)",

  borderRadius: "28px",

  padding: "28px",

  color: "white",

  maxWidth: "720px",

  margin: "0 auto",

};

const title = {

  fontSize: "56px",

  margin: "0 0 16px",

};

const subtitle = {

  fontSize: "22px",

  lineHeight: "1.35",

  marginBottom: "28px",

};

const grid = {

  display: "grid",

  gridTemplateColumns: "1fr 1fr",

  gap: "14px",

};

const link = {

  textDecoration: "none",

};

const card = {

  width: "100%",

  minHeight: "118px",

  borderRadius: "22px",

  border: "none",

  background: "white",

  color: "#111827",

  fontSize: "20px",

  fontWeight: "bold",

  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",

};

const infoBox = {

  margin: "24px",

  marginTop: "-30px",

  background: "white",

  borderRadius: "24px",

  padding: "24px",

  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",

};

const infoTitle = {

  fontSize: "28px",

  marginTop: 0,

};

const infoText = {

  color: "#4b5563",

  fontSize: "17px",

  lineHeight: "1.45",

};

const steps = {

  display: "grid",

  gridTemplateColumns: "1fr 1fr",

  gap: "12px",

  marginTop: "18px",

};

const step = {

  background: "#f97316",

  color: "white",

  padding: "14px",

  borderRadius: "16px",

  fontWeight: "bold",

  textAlign: "center" as const,

};
