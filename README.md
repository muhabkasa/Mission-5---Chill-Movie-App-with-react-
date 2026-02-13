# Chill Movie App - Mission 5

Proyek ini merupakan bagian dari tugas Mission 5 Bootcamp HariSenin, yang mencakup implementasi UI (Slicing), Routing, State Management, dan Responsive Design.

## Demo
**Link Deploy:** https://mission-5-chill-movie-app-with-reac.vercel.app/

---

## Fitur Utama
1.  **Autentikasi UI**: Halaman Login dan Register yang responsif dengan validasi form sederhana.
2.  **Homepage Interaktif**:
    * Hero Section dengan tombol aksi.
    * Movie Lists (Horizontal Scroll) untuk kategori "Melanjutkan Tonton", "Top Rating", "Trending", dan "Rilis Baru".
3.  **Fitur Daftar Saya (My List)**:
    * Halaman khusus /mylist yang menampilkan film tersimpan dalam format Grid.
4.  **Responsive Design**: Tampilan menyesuaikan secara otomatis untuk Desktop dan Mobile (Navbar, Grid, Layout).
5.  **Routing**: Navigasi antar halaman tanpa reload menggunakan react-router-dom.

---

## Tech Stack
* Framework: React JS (Vite)
* Styling: CSS 3 (Custom CSS, Flexbox, Grid, Media Queries)
* Routing: React Router DOM v6
* Version Control: Git & GitHub
* Deployment: Vercel

---

## Struktur Proyek
src/
├── assets/          # Gambar, Ikon, Poster Film
├── components/      # Komponen Reusable (MovieCard.jsx)
├── pages/           # Halaman Utama (Login, Register, Home, MyList)
├── styles/          # File CSS (style.css, home.css, login.css)
├── App.jsx          # Konfigurasi Route
└── main.jsx         # Entry Point React
