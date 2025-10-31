export default function Potensi(){
  return (
    <section>
      <h2 style={{color:'var(--green)'}}>Potensi Desa</h2>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:12}}>
        <div className="card"><h4>Pertanian</h4><p>Hamparan sawah dan produk unggulan.</p></div>
        <div className="card"><h4>Pariwisata</h4><p>Agrowisata, budaya lokal, homestay.</p></div>
        <div className="card"><h4>UMKM</h4><p>Kerajinan dan kuliner lokal.</p></div>
      </div>
    </section>
  )
}
