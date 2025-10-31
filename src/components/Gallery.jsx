import Image from 'next/image'
export default function Gallery({images=[]}){
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:8}}>
      {images.length? images.map((src,i)=>(
        <div key={i} style={{borderRadius:8,overflow:'hidden',background:'#fff',padding:6}}>
          <Image src={src} alt={'img'+i} width={400} height={240} style={{objectFit:'cover'}} />
        </div>
      )): <div className="card">Tidak ada foto</div>}
    </div>
  )
}
