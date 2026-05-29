export default function Home() {

  return (

    <main style={page}>

      <section style={hero}>

        <h1 style={title}>Baumarket</h1>

        <p style={subtitle}>

          Spojujeme stavebníky do hromadných nákupů stavebního materiálu.

        </p>

        <div style={badge}>Středočeský kraj · pilotní provoz</div>

      </section>

      <section style={card}>

        <h2 style={sectionTitle}>Aktuální hromadné nákupy</h2>

        <div style={deal}>

          <div>

            <div style={category}>ZDIVO</div>

            <h3 style={dealTitle}>Ytong 300</h3>

            <p style={text}>Tvárnice pro obvodové a nosné zdivo.</p>

          </div>

          <div style={stats}>

            <div>

              <strong>18 palet</strong>

              <span>aktuálně poptáno</span>

            </div>

            <div>

              <strong>7 lidí</strong>

              <span>zapojeno</span>

            </div>

            <div>

              <strong>50 palet</strong>

              <span>cílový objem</span>

            </div>

          </div>

          <div style={progressWrap}>

            <div style={progressBar}></div>

          </div>

          <button style={button}>Chci se přidat</button>

        </div>

        <div style={deal}>

          <div>

            <div style={category}>IZOLACE</div>

            <h3 style={dealTitle}>Polystyren EPS 100</h3>

            <p style={text}>Fasádní a podlahová izolace pro stavby a rekonstrukce.</p>

          </div>

          <div style={stats}>

            <div>

              <strong>420 m²</strong>

              <span>aktuálně poptáno</span>

            </div>

            <div>

              <strong>11 lidí</strong>

              <span>zapojeno</span>

            </div>

            <div>

              <strong>1000 m²</strong>

              <span>cílový objem</span>

            </div>

          </div>

          <div style={progressWrap}>

            <div style={{ ...progressBar, width: "42%" }}></div>

          </div>

          <button style={button}>Chci se přidat</button>

        </div>

      </section>

    </main>

  );

}

const page = {

  minHeight: "100vh",

  padding: "22px",

  fontFamily: "Arial, sans-serif",

  background: "linear-gradient(180deg, #111827 0%, #1f2937 45%, #f3f4f6 45%)",

};

const hero = {

  color: "white",

  padding: "28px 4px 36px",

};

const title = {

  fontSize: "52px",

  margin: "0 0 12px",

};

const subtitle = {

  fontSize: "21px",

  lineHeight: "1.35",

  margin: "0 0 18px",

};

const badge = {

  display: "inline-block",

  background: "#f97316",

  padding: "10px 14px",

  borderRadius: "999px",

  fontWeight: "bold",

};

const card = {

  background: "white",

  borderRadius: "26px",

  padding: "22px",

  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",

};

const sectionTitle = {

  fontSize: "30px",

  marginTop: 0,

};

const deal = {

  border: "1px solid #e5e7eb",

  borderRadius: "22px",

  padding: "18px",

  marginBottom: "18px",

  background: "#ffffff",

};

const category = {

  color: "#f97316",

  fontWeight: "bold",

  fontSize: "13px",

  letterSpacing: "1px",

};

const dealTitle = {

  fontSize: "28px",

  margin: "6px 0",

};

const text = {

  color: "#4b5563",

  fontSize: "16px",

};

const stats = {

  display: "grid",

  gridTemplateColumns: "1fr",

  gap: "10px",

  marginTop: "16px",

};

const progressWrap = {

  height: "12px",

  background: "#e5e7eb",

  borderRadius: "999px",

  overflow: "hidden",

  margin: "18px 0",

};

const progressBar = {

  width: "36%",

  height: "100%",

  background: "#f97316",

};

const button = {

  width: "100%",

  padding: "16px",

  borderRadius: "16px",

  border: "none",

  background: "#111827",

  color: "white",

  fontSize: "18px",

  fontWeight: "bold",

};
