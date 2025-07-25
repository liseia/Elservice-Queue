document.addEventListener('DOMContentLoaded', () => { // Event listener untuk DOMContentLoaded memastikan bahwa script dijalankan setelah semua elemen HTML dimuat, maka taro tepat sebelum tag penutup </body>

    //Mendapatkan waktu dari pengguna saat membuat web
    const jamSekarang = new Date().getHours();

    if(jamSekarang >= 5 && jamSekarang< 11){
        document.getElementById("jamSapa").innerText = "Selamat pagi!"
    } else if(jamSekarang > 11 && jamSekarang < 15){
        document.getElementById("jamSapa").innerText = "Selamat siang!"
    } else if(jamSekarang > 15 && jamSekarang <= 18) {
        document.getElementById("jamSapa").innerText = "Selamat sore!"
    } else{
        document.getElementById("jamSapa").innerText = "Selamat malam!"
    }

    // Mendapatkan akses ke elemen-elemen HTML yang dibutuhkan
    const ambilNomor = document.getElementById("ambil-nomor-btn");
    const nomorTerkini = document.getElementById('nomor-terkini');
    const modal = document.getElementById('notification-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // Variabel ini menyimpan nomor antrian BERIKUTNYA yang tersedia.
    let nomorAntrianBerikutnya = 1;

    // Saat halaman dimuat, tampilkan nomor antrian pertama yang tersedia.
    nomorTerkini.innerText = nomorAntrianBerikutnya;

    // Fungsi untuk menampilkan modal notifikasi
    function showModal(message) {
        modalMessage.innerText = message;
        modal.style.display = 'flex';
    }

    // Fungsi untuk menyembunyikan modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Menambahkan event listener untuk tombol tutup pada modal
    closeModalBtn.addEventListener('click', closeModal);
    // Menambahkan event listener untuk menutup modal jika area di luarnya diklik
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Program utama untuk mengambil nomor antrian
    function getNumber() {
        // 1. Ambil nomor yang saat ini ditampilkan di layar (inilah nomor yang didapat pengguna).
        const nomorYangDiambil = nomorAntrianBerikutnya;

        // 2. Naikkan nomor untuk persiapan antrian selanjutnya.
        nomorAntrianBerikutnya++;

        // 3. Perbarui tampilan di layar untuk menunjukkan nomor antrian berikutnya yang tersedia.
        nomorTerkini.innerText = nomorAntrianBerikutnya;

        // 4. Tampilkan notifikasi dan cetak NOMOR YANG DIAMBIL (bukan nomor berikutnya).
        showModal(`Nomor antrian Anda adalah: ${nomorYangDiambil}`);
    }

    // Tambahkan event listener ke tombol "Ambil Nomor Ini"
    ambilNomor.addEventListener('click', getNumber);
});