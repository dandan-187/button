document.getElementById("openMessenger").addEventListener("click", function() {
    const userId = "100011166947174";
    const appLink = "fb-messenger://user-thread/" + userId;
    const webLink = "https://www.messenger.com/t/" + userId;

    // Try opening Messenger app
    window.location.href = appLink;

    // Fallback: Open Messenger in browser after 1.5 seconds
    setTimeout(() => {
        window.location.href = webLink;
    }, 1500);
});
