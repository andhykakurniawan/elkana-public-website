import { Footer } from './Footer'
import { Header } from './Header'

export function Shell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
