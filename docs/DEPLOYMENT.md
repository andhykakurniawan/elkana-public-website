# Deployment Plan

## Rekomendasi Domain

- `https://elkana.sch.id` untuk website publik.
- `https://cms.elkana.sch.id` untuk Directus CMS.

## Opsi Simulasi Lokal

```bash
docker compose up -d
npm run dev
```

## Opsi Server Sekolah

Gunakan:

- Ubuntu Server LTS.
- Docker dan Docker Compose.
- UPS.
- Cloudflare Tunnel jika sekolah tidak punya public static IP.

Arsitektur:

```txt
Server Sekolah
├── Directus
├── PostgreSQL
├── Uploads Directus
└── Backup database/media
```

Frontend boleh tetap di hosting existing supaya website publik tidak ikut mati ketika server sekolah mati.

## Environment Frontend

```env
VITE_DIRECTUS_URL=https://cms.elkana.sch.id
VITE_USE_DIRECTUS=true
```

Tidak boleh ada Directus admin token di environment frontend.

## Backup

Backup minimal:

- Dump PostgreSQL harian.
- Folder upload Directus harian.
- Simpan satu copy di external drive dan satu copy cloud.

Contoh manual:

```bash
docker exec elkana-directus-db pg_dump -U elkana_directus elkana_directus > backup.sql
```

## Launch Checklist

- Directus HTTPS aktif.
- Public role hanya read published content.
- Admin TK/SD/SMP sudah dibatasi unit.
- Frontend build sukses.
- Hero image, berita, galeri, PPDB tampil dari CMS.
- Backup restore pernah dites.
