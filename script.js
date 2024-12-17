// Fungsi untuk menghantar borang pesanan dan menambah feedback
document.getElementById("tempahanForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Elakkan borang dihantar secara default

    // Ambil data dari borang
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const lokasi = document.getElementById("lokasi").value;
    const masalah = document.getElementById("masalah").value;
    const pakej = document.getElementById("pakej").value;

    // Buat elemen untuk feedback
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");

    feedbackItem.innerHTML = `
        <strong>${nama}</strong> (${umur} tahun) - Lokasi: ${lokasi}<br>
        <strong>Pakej:</strong> ${pakej}<br>
        <strong>Masalah:</strong> ${masalah}
    `;

    // Tambah feedback ke dalam senarai feedback
    document.getElementById("feedback-list").appendChild(feedbackItem);

    // Kosongkan borang selepas penghantaran
    document.getElementById("tempahanForm").reset();
});
