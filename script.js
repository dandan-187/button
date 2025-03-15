document.getElementById("openMessenger").addEventListener("click", function() {
    const userId = "100011166947174";
    
    // Open Messenger App on Mobile
    window.location.href = "fb-messenger://user-thread/" + userId;

    // Fallback: Open Messenger in browser if the app is not installed
    setTimeout(() => {
        window.location.href = "https://www.messenger.com/t/" + userId;
    }, 1500);
});
