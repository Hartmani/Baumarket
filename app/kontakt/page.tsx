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

            color: "#f97316",

            textDecoration: "none",

            fontWeight: "700",

          }}

        >

          ← Zpět na Baumarket

        </a>

        <h1

          style={{

            fontSize: "56px",

            marginTop: "20px",

            marginBottom: "20px",

          }}

        >

          📞 Kontakt

        </h1>

        <p

          style={{

            fontSize: "24px",

            color: "#4b5563",

            lineHeight: "1.7",

          }}

        >

          Máte dotaz k hromadné poptávce nebo spolupráci?

          Ozvěte se nám.

        </p>

        <div

          style={{

            marginTop: "30px",

            background: "#f8fafc",

            padding: "25px",

            borderRadius: "20px",

          }}

        >

          <p><strong>Email:</strong> info@baumarket.cz</p>

          <p><strong>Telefon:</strong> +420 777 777 777</p>

          <p><strong>Lokalita:</strong> Česká republika</p>

        </div>

      </div>

    </main>

  );

}