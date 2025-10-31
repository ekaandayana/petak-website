import Link from 'next/link'
import Image from 'next/image'

export default function Home(){
  return (
    <section style={{paddingBottom:40}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr',gap:20}}>
        <div className="card" style={{display:'flex',gap:20,alignItems:'center',padding:24}}>
          <div style={{flex:1}}>
            <h1 style={{color:'var(--green)',fontSize:34,margin:0}}>Selamat Datang di Desa Petak</h1>
            <p>Menyajikan informasi pemerintahan, potensi desa, dan transparansi anggaran untuk mendukung partisipasi masyarakat.</p>
            <div style={{display:'flex',gap:12,marginTop:12}}>
              <Link href="/profil"><button className="btn">Tentang Desa</button></Link>
              <Link href="/berita"><button style={{padding:'10px 14px',borderRadius:12,border:'1px solid #ddd'}}>Baca Berita</button></Link>
            </div>
          </div>
          <div style={{width:360,height:220,position:'relative',borderRadius:12,overflow:'hidden'}}>
            <Image src="/logo.png" alt="logo desa" fill style={{objectFit:'contain',background:'#fff'}} />
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="card"><h3>Layanan Desa</h3><p>E-layanan, IMB, KTP, KK</p></div>
          <div className="card"><h3>Pengumuman</h3><p>Agenda desa & berita</p></div>
          <div className="card"><h3>Data Terbuka</h3><p>APBDes, laporan keuangan</p></div>
        </div>
      </div>
    </section>
  )
}
