// --- FITUR JAM REAL-TIME (WIB) ---
    function updateRealTimeClock() {
        const desktopClock = document.getElementById('clock-desktop');
        const mobileClock = document.getElementById('clock-mobile');
        
        // Ambil waktu
        const now = new Date();
        
        // Format waktu 2 digit (contoh: 09:05:01)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds} WIB`;
        
        // Update teks HTML
        if (desktopClock) desktopClock.innerText = timeString;
        if (mobileClock) mobileClock.innerText = timeString;
    }

    // Jalankan segera & update tiap detik
    updateRealTimeClock();
    setInterval(updateRealTimeClock, 1000);