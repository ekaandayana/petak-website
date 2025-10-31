import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="header container">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:56,height:56,overflow:'hidden',borderRadius:10,background:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Image src="/logo.png" alt="logo" width={56} height={56} style={{objectFit:'contain'}} />
        </div>
        <div>
          <div style={{fontWeight:700,color:'var(--green)'}}>Desa Petak</div>
          <div style={{fontSize:12,color:'#666'}}>Gianyar, Bali</div>
        </div>
      </div>

      <nav className="nav" aria-label="Main">
        <Link href="/"><a>Beranda</a></Link>
        <Link href="/profil"><a>Profil</a></Link>
        <Link href="/berita"><a>Berita</a></Link>
        <Link href="/potensi"><a>Potensi</a></Link>
        <Link href="/transparansi"><a>Transparansi</a></Link>
        <Link href="/kontak"><a>Kontak</a></Link>
      </nav>
    </header>
  )
}
