document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengupdate tahun saat ini di footer secara otomatis
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Anda bisa menambahkan interaktivitas di masa depan di sini.
    console.log("Website Profil Aditya Omar Ardany berhasil dimuat.");
});


