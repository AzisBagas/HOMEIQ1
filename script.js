const ESP_URL = 'http://192.168.0.224'; // Ganti dengan IP ESP8266 kamu

async function updateData() {
  try {
    const res = await fetch(ESP_URL);
    const data = await res.json();

    document.querySelector('.temperature .value').textContent = `${data.temperature}°C`;
    document.querySelector('.humidity .value').textContent = `${data.humidity}%`;
    document.querySelector('.temperature .updated').textContent = "Updated: Just now";
  } catch (err) {
    console.error("Gagal ambil data:", err);
  }
}

setInterval(updateData, 5000); // Ambil data setiap 5 detik
updateData(); // Ambil pertama kali saat halaman dibuka
