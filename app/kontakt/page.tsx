export default function KontaktPage() {

  return (

    <main

      style={{

        minHeight: "100vh",

        background: "#f3f4f6",

        padding: "20px",

        fontFamily: "Arial, sans-serif",

      }}

    >

      <div

        style={{

          maxWidth: "800px",

          margin: "0 auto",

          background: "white",

          borderRadius: "28px",

          padding: "30px",

          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",

        }}

      >

        <a

          href="/"

          style={{

            color: "#ea580c",

            textDecoration: "none",

            fontWeight: "bold",

            fontSize: "20px",

          }}

        >

          ← Zpět na Baumarket

        </a>

        <h1

          style={{

            fontSize: "58px",

            marginTop: "30px",

            marginBottom: "20px",

          }}

        >

          ✉️ Kontakt

        </h1>

        <p

          style={{

            fontSize: "20px",

            color: "#4b5563",

            lineHeight: "1.8",

          }}

        >

          Máte dotaz k hromadným nákupům stavebního materiálu?

          Chcete se stát partnerem nebo dodavatelem?

          Kontaktujte nás.

        </p>

        <div

          style={{

            background: "#f9fafb",

            padding: "25px",

            borderRadius: "20px",

            marginTop: "30px",

          }}

        >

          <h2>Kontaktní údaje</h2>

          <p>

            📧 Email:

            <br />

            info@baumarket.cz

          </p>

          <p>

            📱 Telefon:

            <br />

            +420 777 000 000

          </p>

          <p>

            🌍 Web:

            <br />

            www.baumarket.cz

          </p>

        </div>

        <div

          style={{

            background: "#fff7ed",

            padding: "25px",

            borderRadius: "20px",

            marginTop: "25px",

          }}

        >

          <h2>Pro dodavatele</h2>

          <p

            style={{

              lineHeight: "1.8",

            }}

          >

            Pokud jste výrobce nebo prodejce stavebního materiálu,

            rádi s vámi probereme možnosti spolupráce.

          </p>

        </div>

      </div>

    </main>

  );

}