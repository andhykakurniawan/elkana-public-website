import { Navigate, Route, Routes } from 'react-router-dom'
import { unitsById } from '../content'
import { AboutPage } from '../pages/public/AboutPage'
import { AdmissionsPage } from '../pages/public/AdmissionsPage'
import { ContactPage } from '../pages/public/ContactPage'
import { GalleryPage } from '../pages/public/GalleryPage'
import { HomePage } from '../pages/public/HomePage'
import { NewsPage } from '../pages/public/NewsPage'
import { NotFoundPage } from '../pages/shared/NotFoundPage'
import { TKHomePage } from '../pages/units/TKHomePage'
import { UnitNewsPage } from '../pages/units/UnitNewsPage'
import { UnitSchoolHomePage } from '../pages/units/UnitSchoolHomePage'

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
