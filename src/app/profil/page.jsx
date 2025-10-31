import Link from 'next/link'

export default function Profil(){
  return (
    <section>
      <h2 style={{color:'var(--green)'}}>Profil Desa Petak</h2>
      <p>Ringkasan profil singkat Desa Petak. Gunakan sub-menu di bawah untuk detail.</p>

      <div style={{display:'flex',gap:8,marginTop:12}}>
        <Link href="/profil/sejarah"><button style={{padding:8,borderRadius:8}}>Sejarah</button></Link>
        <Link href="/profil/visi-misi"><button style={{padding:8,borderRadius:8}}>Visi & Misi</button></Link>
        <Link href="/profil/struktur"><button style={{padding:8,borderRadius:8}}>Struktur Pemerintahan</button></Link>
        <Link href="/profil/lembaga"><button style={{padding:8,borderRadius:8}}>Lembaga Desa</button></Link>
      </div>

      <div style={{marginTop:18}} className="card">
        <h3>Desa Petak</h3>
        <p>Desa Petak adalah desa... (ringkasan). Untuk detail, buka sub-halaman di atas.</p>
      </div>
    </section>
  )
}
