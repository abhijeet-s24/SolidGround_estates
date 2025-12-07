const btn = document.querySelectorAll(".interestedBtn")

btn.forEach(e => {
    e.addEventListener("click", function () {
    if (this.innerText === "Interested") {
        this.innerText = "Not Interested";
        this.style.backgroundColor = "red";
    } else {
        this.innerText = "Interested";
        this.style.backgroundColor = "greenyellow";
    }
});

})