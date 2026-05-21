const banner = document.getElementById('banner');





// ==========================================
// Switch by Time of Day
// ==========================================
function setBannerByTimeTemp() {
    const hour = new Date().getHours(); 

    if (hour >= 5 && hour < 12) {
        // Morning (5:00 AM - 11:59 AM)
        banner.style.backgroundColor = "#d3c7e2";
    } else if (hour >= 12 && hour < 18) {
        // Afternoon (12:00 PM - 5:59 PM)
        banner.style.backgroundColor = "#6cbbec";
    } else if (hour >= 18 && hour < 21) {
        // Evening / Sunset (6:00 PM - 8:59 PM)
        banner.style.backgroundColor = "#ebb645";
    } else {
        // Night (9:00 PM - 4:59 AM)
        banner.style.backgroundColor = "#322b4d";
    }
}




// ==========================================
// Switch by Time of Day
// ==========================================
function setBannerByTime() {
    const hour = new Date().getHours(); 

    if (hour >= 5 && hour < 12) {
        // Morning (5:00 AM - 11:59 AM)
        banner.src = "/images/sky-morning.jpg"; 
    } else if (hour >= 12 && hour < 18) {
        // Afternoon (12:00 PM - 5:59 PM)
        banner.src = "/images/sky-afternoon.jpg"; 
    } else if (hour >= 18 && hour < 21) {
        // Evening / Sunset (6:00 PM - 8:59 PM)
        banner.src = "/images/sky-evening.jpg"; 
    } else {
        // Night (9:00 PM - 4:59 AM)
        banner.src = "/images/sky-night.jpg"; 
    }
}


setBannerByTimeTemp();