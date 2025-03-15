document.getElementById("openMessenger").addEventListener("click", function() {
    const userId = "100011166947174";
    
    // Check if the user is on mobile or desktop
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Open Messenger App on Mobile
        window.location.href = "fb-messenger://user-thread/" + userId;
    } else {
        // Open Messenger in a new tab on PC
        window.open("https://www.messenger.com/t/" + userId, "_blank");
    }
});
