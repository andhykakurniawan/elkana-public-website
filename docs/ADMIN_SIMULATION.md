# Simulasi Admin Panel YPK Elkana

Admin panel tahap awal menggunakan Directus bawaan. React/Vite tetap menjadi website publik, sedangkan Directus menjadi tempat staf sekolah mengelola konten.

## URL Lokal

- Website publik: `http://127.0.0.1:5173`
- Directus admin: `http://127.0.0.1:8055`

## Menjalankan Simulasi

1. Salin `.env.example` menjadi `.env`.
2. Ganti password default di `.env`.
3. Jalankan CMS lokal:

```bash
docker compose up -d
```

4. Install dependency frontend jika belum:

```bash
npm install
```

5. Jalankan website:

```bash
npm run dev
```

6. Login ke Directus memakai `DIRECTUS_ADMIN_EMAIL` dan `DIRECTUS_ADMIN_PASSWORD`.

## Cara Kerja

Frontend membaca `VITE_DIRECTUS_URL`. Jika `VITE_USE_DIRECTUS=true`, website mencoba mengambil data dari Directus. Jika Directus belum aktif atau collection belum dibuat, website otomatis memakai konten static yang sudah ada.

## Urutan Simulasi Yang Disarankan

1. Buat collection di Directus sesuai `docs/DIRECTUS_SCHEMA.md`.
2. Buat role dan permission sesuai `docs/DIRECTUS_PERMISSIONS.md`.
3. Isi data `school_units` untuk `tk`, `sd`, dan `smp`.
4. Upload hero image per unit.
5. Tambah berita published dan draft.
6. Refresh website publik dan cek hanya published yang tampil.

## Catatan Penting

- Jangan simpan admin token Directus di frontend.
- Frontend hanya memakai `VITE_DIRECTUS_URL`.
- Admin panel custom React belum dibuat karena Directus sudah menyediakan CRUD, upload, role, dan permission.
