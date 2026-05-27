export default function HomePage() {

  return (

    <main

      style={{

        minHeight: "100vh",

        padding: "40px",

        backgroundImage:

          "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        color: "white",

      }}

    >

      <div

        style={{

          background: "rgba(0,0,0,0.55)",

          padding: "30px",

          borderRadius: "25px",

          maxWidth: "700px",

        }}

      >

        <h1

          style={{

            fontSize: "64px",

            marginBottom: "10px",

          }}

        >

          Baumarket

        </h1>

        <p

          style={{

            fontSize: "28px",

            marginBottom: "30px",

          }}

        >

          Spojujeme stavebníky ve Středočeském kraji.

        </p>

        <div

          style={{

            display: "flex",

            flexWrap: "wrap",

            gap: "15px",

            marginBottom: "30px",

          }}

        >

          <button style={btn}>🏢 Firmy</button>

          <button style={btn}>👷 Řemeslníci</button>

          <button style={btn}>🏗️ Materiál</button>

          <button style={btn}>📋 Poptávky</button>

          <button style={btn}>📞 Kontakt</button>

        </div>

        <div

          style={{

            background: "white",

            color: "black",

            padding: "25px",

            borderRadius: "20px",

          }}

        >

          <h2 style={{ fontSize: "42px" }}>Nové firmy</h2>

          <p>🏠 Stavby Novák s.r.o.</p>

          <p>⚡ Elektro Kladno</p>

          <p>🪚 Truhlářství Beneš</p>

        </div>

      </div>

    </main>

  );

}

const btn = {

  background: "#ff7a00",

  color: "white",

  border: "none",

  padding: "15px 22px",

  borderRadius: "14px",

  fontSize: "20px",

};
