function submitForm() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value || "Belum dipilih";
  const topik = document.getElementById("topik").value;
  const lokasi = document.getElementById("lokasi").value; 
  const tanggal = document.getElementById("tanggal").value;
  const catatan = document.getElementById("catatan").value;

  alert(
    "📝 Data Pendaftaran Anda:\n" +
    "Nama: " + nama + "\n" +
    "Email: " + email + "\n" +
    "Jenis Kelamin: " + gender + "\n" +
    "Topik Seminar: " + topik + "\n" +
    "Lokasi Seminar: " + lokasi + "\n" + 
    "Tanggal Seminar: " + tanggal + "\n" + 
    "Catatan: " + catatan
  );
}
