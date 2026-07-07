import { Navigate, Route, Routes } from 'react-router-dom'
import { unitsById } from '../content'
import { AboutPage } from '../pages/AboutPage'
import { AdmissionsPage } from '../pages/AdmissionsPage'
import { ContactPage } from '../pages/ContactPage'
import { GalleryPage } from '../pages/GalleryPage'
import { HomePage } from '../pages/HomePage'
import { NewsPage } from '../pages/NewsPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { TKHomePage } from '../pages/TKHomePage'
import { UnitNewsPage } from '../pages/UnitNewsPage'
import { UnitPage } from '../pages/UnitPage'
import { UnitSchoolHomePage } from '../pages/UnitSchoolHomePage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tentang" element={<AboutPage />} />
      <Route path="/unit/tk" element={<TKHomePage />} />
      <Route path="/unit/sd" element={<UnitSchoolHomePage type="sd" />} />
      <Route path="/unit/smp" element={<UnitSchoolHomePage type="smp" />} />
      <Route path="/berita" element={<NewsPage />} />
      <Route path="/berita/tk" element={<UnitNewsPage unit={unitsById.tk} />} />
      <Route path="/berita/sd" element={<UnitNewsPage unit={unitsById.sd} />} />
      <Route path="/berita/smp" element={<UnitNewsPage unit={unitsById.smp} />} />
      <Route path="/ppdb" element={<AdmissionsPage />} />
      <Route path="/kontak" element={<ContactPage />} />
      <Route path="/akademik" element={<Navigate to="/unit/sd" replace />} />
      <Route path="/galeri" element={<GalleryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
