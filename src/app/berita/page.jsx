export default function Berita(){
  const sample = [
    {id:1,title:'Musrenbang Desa 2025',date:'2025-10-15',excerpt:'Rencana pembangunan desa.'},
    {id:2,title:'Panen Raya Padi',date:'2025-09-20',excerpt:'Panen padi seluas 10 ha.'}
  ]
  return (
    <section>
      <h2 style={{color:'var(--green)'}}>Berita & Pengumuman</h2>
      <div style={{marginTop:12}} className="grid">
        {sample.map(n=>(
          <article key={n.id} className="card">
            <h3 style={{color:'var(--orange)'}}>{n.title}</h3>
            <div style={{fontSize:12,color:'#666'}}>{n.date}</div>
            <p>{n.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
