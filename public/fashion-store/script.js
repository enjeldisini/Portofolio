/* ==========================================
   1. FUNGSI KERANJANG BELANJA
   ========================================== */
function tambahKeKeranjang() {
    alert("Mantap! Barang berhasil dimasukkan ke keranjang belanja.");
}

/* ==========================================
   2. FITUR RIWAYAT PENCARIAN (LocalStorage)
   ========================================== */
function simpanPencarian() {
    const input = document.getElementById("inputCari");
    const kataKunci = input.value.toLowerCase().trim(); // Ubah ke huruf kecil agar pencarian fleksibel

    // --- BAGIAN 1: LOGIKA FILTER PRODUK ---
    const semuaProduk = document.querySelectorAll(".card"); // Ambil semua kartu produk
    
    semuaProduk.forEach(produk => {
        const namaProduk = produk.querySelector("h3").innerText.toLowerCase();
        
        if (namaProduk.includes(kataKunci)) {
            produk.style.display = "block"; // Tampilkan jika cocok
        } else {
            produk.style.display = "none";  // Sembunyikan jika tidak cocok
        }
    });

    // --- BAGIAN 2: LOGIKA SIMPAN RIWAYAT ---
    if (kataKunci !== "") {
        let riwayat = JSON.parse(localStorage.getItem("riwayatIseng")) || [];
        
        // Cek agar tidak ada kata ganda di riwayat
        if (!riwayat.includes(kataKunci)) {
            riwayat.unshift(kataKunci);
            if (riwayat.length > 3) riwayat.pop();
            localStorage.setItem("riwayatIseng", JSON.stringify(riwayat));
            tampilkanRiwayat();
        }
    }
}
    

function tampilkanRiwayat() {
    const riwayat = JSON.parse(localStorage.getItem("riwayatIseng")) || [];
    const listElement = document.getElementById("listRiwayat");
    
    if (listElement) {
        if (riwayat.length > 0) {
            listElement.innerText = riwayat.join(", ");
        } else {
            listElement.innerText = "Belum ada pencarian";
        }
    }
}

function hapusRiwayat() {
    localStorage.removeItem("riwayatIseng");
    tampilkanRiwayat();
}

/* ==========================================
   3. FUNGSI FORMULIR KONTAK
   ========================================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman
        const nama = document.getElementById('nama').value;
        alert("Terima kasih " + nama + ", pesan Anda telah terkirim!");
        contactForm.reset(); 
    });
}

/* ==========================================
   4. FITUR SCROLL KE ATAS (Smooth Scroll)
   ========================================== */
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("btnKeAtas");
    if (btn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
}

function keAtas() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ==========================================
   5. INISIALISASI SAAT HALAMAN DIBUKA
   ========================================== */
window.onload = function() {
    tampilkanRiwayat();
};

// Fitur pencarian otomatis saat mengetik
const inputCari = document.getElementById("inputCari");
if(inputCari) {
    inputCari.addEventListener("keyup", function() {
        simpanPencarian(); // Panggil fungsi filter setiap kali tombol keyboard ditekan
    });
}