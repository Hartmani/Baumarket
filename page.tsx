
export default function Home() {
  return (
    <main style={{padding:40,fontFamily:"Arial"}}>
      <h1>Baumarket</h1>
      <p>
        Spojujeme stavebníky ve Středočeském kraji a vyjednáváme lepší ceny.
      </p>

      <a href="/request">
        <button style={{
          padding:"12px 20px",
          background:"black",
          color:"white",
          borderRadius:8,
          border:"none",
          cursor:"pointer"
        }}>
          Vytvořit poptávku
        </button>
      </a>
    </main>
  )
}
