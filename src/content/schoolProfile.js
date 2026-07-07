export const school = {
  name: 'YPK Elkana',
  fullName: 'Yayasan Pendidikan Kristen Elkana',
  tagline: 'Sekolah Kristen yang membentuk karakter, iman, dan kompetensi masa depan.',
  city: 'Pasuruan',
  email: 'info@ypkelkana.sch.id',
  phone: '+62 812 0000 0000',
  address: 'Jl. Panglima Sudirman No. 123, Pasuruan, Jawa Timur, Indonesia',
  hours: 'Senin - Jumat, 07.00 - 15.00',
}

export const homeHero = {
  image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=85',
  eyebrow: school.fullName,
  title: school.name,
  description: school.tagline,
  primaryAction: {
    label: 'Mulai Pendaftaran',
    path: '/ppdb',
  },
  secondaryAction: {
    label: 'Lihat Profil',
    path: '/tentang',
  },
}

export const stats = [
  { value: 'TK', label: 'fondasi usia dini' },
  { value: 'SD', label: 'dasar akademik dan karakter' },
  { value: 'SMP', label: 'mandiri dan siap melangkah' },
]
