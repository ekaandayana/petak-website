import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Desa Petak - Gianyar',
  description: 'Website resmi Pemerintah Desa Petak, Gianyar, Bali'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main className="container" style={{paddingTop:20}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
