export default function Home() {

  return (

    <main

      style={{

        padding: "20px",

        fontFamily: "Arial",

        background: "#f5f5f5",

        minHeight: "100vh",

      }}

    >

      <h1 style={{ fontSize: "42px" }}>Baumarket</h1>

      <p>Spojujeme stavebníky ve Středočeském kraji.</p>

      <div

        style={{

          display: "flex",

          gap: "10px",

          marginTop: "30px",

          flexWrap: "wrap",

        }}

      >

        <button>Firmy</button>

        <button>Řemeslníci</button>

        <button>Materiál</button>

        <button>Poptávky</button>

        <button>Kontakt</button>

      </div>

    </main>

  );

}
