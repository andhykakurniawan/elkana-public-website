# Directus Schema

Gunakan UUID untuk primary key jika memungkinkan. Semua collection konten yang tampil di publik wajib memiliki field `status`.

## Status

Gunakan pilihan berikut:

- `DRAFT`
- `PUBLISHED`
- `ARCHIVED`

## school_units

Data unit pendidikan.

| Field | Type | Catatan |
| --- | --- | --- |
| id | uuid | Primary key |
| slug | string | `tk`, `sd`, `smp` |
| level | string | TK, SD, SMP |
| name | string | Nama unit |
| title | string | Judul pendek |
| short_description | text | Ringkasan unit |
| description | text | Deskripsi unit |
| hero_image | file | Gambar hero |
| highlights | json atau text | List highlight |
| sort_order | integer | Urutan tampil |
| status | string | DRAFT/PUBLISHED/ARCHIVED |

## unit_profiles

Satu profil aktif per unit.

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation ke `school_units` |
| hero_title | string |
| hero_subtitle | text |
| history | text |
| vision | text |
| missions | json |
| principal_name | string |
| principal_photo | file |
| principal_message | text |
| logo | file |
| address | text |
| phone | string |
| email | string |
| instagram | string |
| youtube | string |
| google_maps_url | string |
| status | string |

## programs

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| title | string |
| slug | string |
| short_description | text |
| description | text |
| image | file |
| icon | string |
| sort_order | integer |
| status | string |

## facilities

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| name | string |
| description | text |
| image | file |
| sort_order | integer |
| status | string |

## staff

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| name | string |
| position | string |
| category | string |
| photo | file |
| biography | text |
| education | string |
| sort_order | integer |
| status | string |

## achievements

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| title | string |
| description | text |
| achievement_date | date |
| level | string |
| category | string |
| student_name | string |
| image | file |
| status | string |

## news

| Field | Type | Catatan |
| --- | --- | --- |
| id | uuid | Primary key |
| unit_id | relation nullable | Kosong untuk berita yayasan/global |
| title | string | Required |
| slug | string | Unique |
| summary | text | Ringkasan |
| content | rich text | Isi artikel |
| cover_image | file | Cover |
| author | string | Penulis |
| published_at | datetime | Jadwal/tanggal publish |
| status | string | DRAFT/PUBLISHED/ARCHIVED |

## events

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| title | string |
| description | text |
| location | string |
| start_date | datetime |
| end_date | datetime |
| image | file |
| registration_url | string |
| status | string |

## galleries dan gallery_images

`galleries`:

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| title | string |
| description | text |
| event_date | date |
| cover_image | file |
| sort_order | integer |
| status | string |

`gallery_images`:

| Field | Type |
| --- | --- |
| id | uuid |
| gallery_id | relation ke `galleries` |
| image | file |
| caption | string |
| sort_order | integer |

## admissions

| Field | Type |
| --- | --- |
| id | uuid |
| unit_id | relation |
| title | string |
| description | text |
| registration_period | string |
| requirements | json atau text |
| procedure | json atau text |
| fee_information | text |
| contact_person | string |
| registration_url | string |
| brochure | file |
| status | string |

## site_settings

Konten global yayasan.

| Field | Type |
| --- | --- |
| id | uuid |
| site_name | string |
| logo | file |
| address | text |
| phone | string |
| email | string |
| footer_text | text |
| copyright_text | string |
| instagram | string |
| youtube | string |
| soundcloud_url | string |
| status | string |
