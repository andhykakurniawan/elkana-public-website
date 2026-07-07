# Panduan Edit Konten Website

Folder ini khusus untuk data yang aman diedit pihak sekolah. Jangan edit folder `components` kalau hanya ingin mengubah teks, foto, berita, guru, atau informasi PPDB.

## Struktur Konten

- `public/schoolProfile.js`: identitas yayasan, alamat, kontak, jam layanan, hero beranda.
- `public/visionMission.js`: profil yayasan, visi, misi, dan nilai utama.
- `public/navigation.js`: daftar menu website.
- `public/admissions.js`: alur dan informasi PPDB.
- `public/news.js`: berita dan agenda semua unit.
- `public/gallery.js`: data foto galeri.
- `public/anthem.js`: link Mars Elkana atau embed audio.
- `units/tk.js`: konten khusus TK Kristen Elkana.
- `units/sd.js`: konten khusus SD Kristen Elkana.
- `units/smp.js`: konten khusus SMP Kristen Elkana.
- `teachers/teachers.js`: data guru dan staf.

## Hero Images

File hero utama disimpan di `public/images/hero`.

- `yayasan-hero.png`: hero beranda yayasan.
- `tk-hero.png`: hero TK Kristen Elkana.
- `sd-hero.png`: hero SD Kristen Elkana.
- `smp-hero.png`: hero SMP Kristen Elkana.

## Cara Edit Yang Aman

- Ubah teks di dalam tanda kutip saja.
- Jangan ubah nama export seperti `school`, `news`, `gallery`, atau `unitsById`.
- Kalau mau tambah item, copy satu object yang sudah ada, paste di bawahnya, lalu ganti isi teks/foto.
- Simpan file, lalu refresh browser.

## Pembagian Page

- Halaman yayasan/public ada di `src/pages/public`.
- Halaman unit TK, SD, SMP ada di `src/pages/units`.
- Komponen template tampilan ada di `src/components/templates`.
