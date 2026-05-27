export default function Home() {

  return (

    <main

      style={{

        minHeight: "100vh",

        background: "#f3f4f6",

        padding: "30px",

        fontFamily: "Arial",

      }}

    >

      <h1

        style={{

          fontSize: "48px",

          marginBottom: "10px",

          color: "#111827",

        }}

      >

        Baumarket

      </h1>

      <p

        style={{

          color: "#4b5563",

          marginBottom: "30px",

        }}

      >

        Spojujeme stavebníky ve Středočeském kraji.

      </p>

      <div

        style={{

          display: "flex",

          gap: "12px",

          flexWrap: "wrap",

          marginBottom: "40px",

        }}

      >

        <button style={btn}>Firmy</button>

        <button style={btn}>Řemeslníci</button>

        <button style={btn}>Materiál</button>

        <button style={btn}>Poptávky</button>

        <button style={btn}>Kontakt</button>

      </div>

      <div

        style={{

          background: "white",

          padding: "20px",

          borderRadius: "16px",

          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",

        }}

      >

        <h2>Nové firmy</h2>

        <p>Stavby Novák s.r.o.</p>

        <p>Elektro Kladno</p>

        <p>Truhlářství Beneš</p>

      </div>

    </main>

  );

}

const btn = {

  background: "#111827",

  color: "white",

  border: "none",

  padding: "12px 18px",

  borderRadius: "10px",

};
