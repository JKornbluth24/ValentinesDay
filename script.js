const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");

// YES BUTTON
yesButton.addEventListener("click", () => {
    document.body.innerHTML = "<h1>YAY!!! 💖💖💖</h1><p>I knew you'd say yes 😘</p>";
});

// NO BUTTON RUNS AWAY
noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});


