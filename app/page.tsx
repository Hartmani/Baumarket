export default function Home() {

  return (

    <main

      style={{

        minHeight: "100vh",

        padding: "30px",

        backgroundImage:

          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        color: "white",

        fontFamily: "Arial, sans-serif",

      }}

    >

      {/* tmavé překrytí */}

      <div

        style={{

          background: "rgba(0,0,0,0.55)",

          minHeight: "100vh",

          borderRadius: "24px",

          padding: "30px",

        }}

      >

        {/* Logo */}

        <h1

          style={{

            fontSize: "72px",

            fontWeight: "bold",

            marginBottom: "10px",

          }}

        >

          Baumarket

        </h1>

        <p

          style={{

            fontSize: "28px",

            color: "#e5e7eb",

            marginBottom: "40px",

          }}

        >

          Spojujeme stavebníky ve Středočeském kraji.

        </p>

        {/* Menu */}

        <div

          style={{

            display: "flex",

            flexWrap: "wrap",

            gap: "20px",

            marginBottom: "40px",

          }}

        >

          {[

            ["🏢", "Firmy"],

            ["👷", "Řemeslníci"],

            ["🚛", "Materiál"],

            ["📋", "Poptávky"],

            ["📞", "Kontakt"],

          ].map(([icon, text]) => (

            <div

              key={text}

              style={{

                background: "white",

                color: "#111827",

                width: "180px",

                height: "140px",

                borderRadius: "24px",

                display: "flex",

                flexDirection: "column",

                justifyContent: "center",

                alignItems: "center",

                fontWeight: "bold",

                fontSize: "28px",

                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",

              }}

            >

              <div style={{ fontSize: "42px", marginBottom: "10px" }}>

                {icon}

              </div>

              {text}

            </div>

          ))}

        </div>

        {/* Nové firmy */}

        <div

          style={{

            background: "rgba(255,255,255,0.92)",

            borderRadius: "30px",

            padding: "30px",

            color: "#111827",

            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",

          }}

        >

          <h2

            style={{

              fontSize: "52px",

              marginBottom: "30px",

            }}

          >

            Nové firmy

          </h2>

          {[

            ["🏠", "Stavby Novák s.r.o.", "Stavební práce"],

            ["⚡", "Elektro Kladno", "Elektroinstalace"],

            ["🪚", "Truhlářství Beneš", "Truhlářské práce"],

          ].map(([icon, title, desc]) => (

            <div

              key={title}

              style={{

                background: "white",

                borderRadius: "20px",

                padding: "20px",

                marginBottom: "20px",

                display: "flex",

                alignItems: "center",

                gap: "20px",

                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",

              }}

            >

              <div

                style={{

                  width: "70px",

                  height: "70px",

                  borderRadius: "18px",

                  background: "#f59e0b",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  fontSize: "36px",

                }}

              >

                {icon}

              </div>

              <div>

                <div

                  style={{

                    fontSize: "28px",

                    fontWeight: "bold",

                  }}

                >

                  {title}

                </div>

                <div

                  style={{

                    color: "#6b7280",

                    fontSize: "22px",

                  }}

                >

                  {desc}

                </div>

              </div>

            </div>

          ))}

          {/* tlačítko */}

          <button

            style={{

              width: "100%",

              padding: "22px",

              borderRadius: "20px",

              border: "none",

              background: "#f97316",

              color: "white",

              fontSize: "28px",

              fontWeight: "bold",

              marginTop: "10px",

            }}

          >

            ➕ Přidat poptávku

          </button>

        </div>

      </div>

    </main>

  )

}
