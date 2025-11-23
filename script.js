    function updateRealTimeClock() {
        const desktopClock = document.getElementById('clock-desktop');
        const mobileClock = document.getElementById('clock-mobile');
        
        const now = new Date();
        
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds} WIB`;
        
        if (desktopClock) desktopClock.innerText = timeString;
        if (mobileClock) mobileClock.innerText = timeString;
    }

    updateRealTimeClock();
    setInterval(updateRealTimeClock, 1000);
