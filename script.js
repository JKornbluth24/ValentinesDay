const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");

// YES CLICK
yesButton.addEventListener("click", () => {
    document.body.innerHTML = "<h1>YAY!!! 💖💖💖</h1><p>I knew you'd say yes 😘</p>";
});

// NO RUNS AWAY
noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

// CREATE CHICKEN
function createChicken() {
    const chicken = document.createElement("div");
    chicken.className = "chicken";
    chicken.textContent = "🐔";

    chicken.style.top = Math.random() * window.innerHeight + "px";
    chicken.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(chicken);

    setTimeout(() => {
        chicken.remove();
    }, 7000);
}

// SPAWN LOOP
setInterval(createChicken, 500);
