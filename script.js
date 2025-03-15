document.getElementById("openMessenger").addEventListener("click", function() {
    const userId = "100011166947174";
    const appLink = "fb://messaging/" + userId; // Try "fb://profile/" if this fails
    const fallbackWebLink = "https://www.messenger.com/t/" + userId;

    // Try opening Messenger app
    window.location.href = appLink;

    // Fallback: Open Messenger in browser after 2s if app doesn't open
    setTimeout(() => {
        window.location.href = fallbackWebLink;
    }, 2000);
});
