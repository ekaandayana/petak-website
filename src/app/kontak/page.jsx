export default function Kontak(){
  return (
    <section>
      <h2 style={{color:'var(--green)'}}>Kontak & Layanan</h2>
      <div className="card" style={{marginTop:12}}>
        <p><strong>Alamat:</strong> Jl. Desa Petak No.1 — Gianyar, Bali</p>
        <p><strong>Jam Layanan:</strong> Senin—Jumat 08:00—16:00</p>
        <p><strong>Telp:</strong> (0361) XXX-XXXX</p>

        <form onSubmit={(e)=>{e.preventDefault(); alert('Pesan terkirim (demo)');}}>
          <input required placeholder="Nama" style={{width:'100%',padding:10,marginBottom:8,borderRadius:8}}/>
          <input required placeholder="Email / No. Telp" style={{width:'100%',padding:10,marginBottom:8,borderRadius:8}}/>
          <textarea required placeholder="Pesan singkat" style={{width:'100%',padding:10,marginBottom:8,borderRadius:8}} rows={4}/>
          <div style={{display:'flex',gap:8}}>
            <button className="btn" type="submit">Kirim</button>
            <button type="reset" style={{padding:10,borderRadius:8}}>Reset</button>
          </div>
        </form>
      </div>
    </section>
  )
}
