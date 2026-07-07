import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { AcademicsPage } from '../pages/AcademicsPage'
import { AdmissionsPage } from '../pages/AdmissionsPage'
import { ContactPage } from '../pages/ContactPage'
import { GalleryPage } from '../pages/GalleryPage'
import { HomePage } from '../pages/HomePage'
import { NewsPage } from '../pages/NewsPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tentang" element={<AboutPage />} />
      <Route path="/akademik" element={<AcademicsPage />} />
      <Route path="/ppdb" element={<AdmissionsPage />} />
      <Route path="/berita" element={<NewsPage />} />
      <Route path="/galeri" element={<GalleryPage />} />
      <Route path="/kontak" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
