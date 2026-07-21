# Directus Permissions

Otorisasi utama wajib di Directus, bukan hanya di frontend.

## Roles

## SYSTEM_ADMIN

Hak akses:

- Read/create/update/archive semua collection.
- Kelola semua unit.
- Kelola user admin unit.
- Kelola `site_settings`.

## ADMIN_TK

Hak akses:

- CRUD konten dengan `unit_id.slug = tk`.
- Tidak bisa mengubah `unit_id` ke unit lain.
- Tidak bisa akses user management.
- Tidak bisa mengubah `site_settings`.

## ADMIN_SD

Sama seperti ADMIN_TK, tetapi filter `unit_id.slug = sd`.

## ADMIN_SMP

Sama seperti ADMIN_TK, tetapi filter `unit_id.slug = smp`.

## Public Role

Public hanya boleh read:

- `school_units` dengan `status = PUBLISHED`.
- `unit_profiles` dengan `status = PUBLISHED`.
- `programs` dengan `status = PUBLISHED`.
- `facilities` dengan `status = PUBLISHED`.
- `staff` dengan `status = PUBLISHED`.
- `achievements` dengan `status = PUBLISHED`.
- `news` dengan `status = PUBLISHED`.
- `events` dengan `status = PUBLISHED`.
- `galleries` dengan `status = PUBLISHED`.
- `gallery_images` jika gallery parent published.
- `admissions` dengan `status = PUBLISHED`.
- `site_settings` dengan `status = PUBLISHED`.

Public juga perlu read file assets yang dipakai konten published.

## Rule Penting

- Unit admin tidak boleh hard delete. Pakai status `ARCHIVED`.
- Field `unit_id` harus read-only untuk admin unit setelah data dibuat.
- Upload batasi ke image dan dokumen yang dibutuhkan.
- Jangan buat token statis untuk frontend.
