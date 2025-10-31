export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
        <div>
          <div style={{fontWeight:700}}>Pemerintah Desa Petak</div>
          <div style={{fontSize:13}}>Jl. Desa Petak No.1 — Gianyar, Bali</div>
        </div>
        <div style={{fontSize:13}}>© {new Date().getFullYear()} Desa Petak — Semua hak dilindungi</div>
      </div>
    </footer>
  )
}
