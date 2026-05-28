export default function Home() {

  return (

    <main

      style={{

        minHeight: "100vh",

        padding: "20px",

        fontFamily: "Arial, sans-serif",

        backgroundImage:

          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        color: "white",

      }}

    >

      <div

        style={{

          background: "rgba(0,0,0,0.55)",

          borderRadius: "24px",

          padding: "24px",

        }}

      >

        <h1

          style={{

            fontSize: "46px",

            margin: "0 0 12px 0",

          }}

        >

          Baumarket

        </h1>

        <p

          style={{

            fontSize: "22px",

            lineHeight: "1.3",

            marginBottom: "28px",

          }}

        >

          Spojujeme stavebníky ve Středočeském kraji.

        </p>

        <div

          style={{

            display: "grid",

            gridTemplateColumns: "1fr 1fr",

            gap: "14px",

            marginBottom: "28px",

          }}

        >

          <button style={btn}>🏢<br />Firmy</button>

          <button style={btn}>👷<br />Řemeslníci</button>

          <button style={btn}>🚛<br />Materiál</button>

          <button style={btn}>📋<br />Poptávky</button>

          <button style={btn}>📞<br />Kontakt</button>

        </div>

        <section

          style={{

            background: "white",

            color: "#111827",

            borderRadius: "24px",

            padding: "24px",

          }}

        >

          <h2 style={{ fontSize: "34px" }}>Nové firmy</h2>

          <p>🏠 Stavby Novák s.r.o.</p>

          <p>⚡ Elektro Kladno</p>

          <p>🪚 Truhlářství Beneš</p>

          <button

            style={{

              width: "100%",

              marginTop: "18px",

              padding: "16px",

              borderRadius: "16px",

              border: "none",

              background: "#f97316",

              color: "white",

              fontSize: "20px",

              fontWeight: "bold",

            }}

          >

            ➕ Přidat poptávku

          </button>

        </section>

      </div>

    </main>

  );

}

const btn = {

  background: "white",

  color: "#111827",

  border: "none",

  borderRadius: "20px",

  padding: "18px 10px",

  fontSize: "18px",

  fontWeight: "bold",

};
