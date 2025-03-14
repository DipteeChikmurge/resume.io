function openTab(event, tabId) {
    let i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    // Remove "active" class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show active tab content and highlight the clicked tab
    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Set the first tab as active on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-content")[0].classList.add("active");
    document.getElementsByClassName("tab-content")[0].style.display = "block";
});