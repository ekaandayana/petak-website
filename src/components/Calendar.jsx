export default function Calendar({events=[]}){
  return (
    <div className="card">
      <h4>Kalender Kegiatan</h4>
      {events.length? events.map((e,i)=>(
        <div key={i} style={{padding:'8px 0',borderBottom:'1px solid #eee'}}>
          <strong>{e.date}</strong> — {e.title}
        </div>
      )): <p>Tidak ada kegiatan terjadwal.</p>}
    </div>
  )
}
