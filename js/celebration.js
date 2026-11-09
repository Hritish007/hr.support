const colors = ["#ff0043", "#14fc56", "#1e90ff", "#ffae00", "#ffffff"];

function createFirework(x, y) {
  const container = document.getElementById("fireworks-overlay");

  const fw = document.createElement("div");
  fw.className = "fw";
  fw.style.left = x + "px";
  fw.style.top = y + "px";

  const particles = 40 + Math.random() * 30;

  for (let i = 0; i < particles; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    const angle = Math.random() * 2 * Math.PI;
    const power = Math.random() * 120 + 40;

    const dx = Math.cos(angle) * power;
    const dy = Math.sin(angle) * power;

    spark.style.setProperty("--x", dx + "px");
    spark.style.setProperty("--y", dy + "px");

    spark.style.background = colors[Math.floor(Math.random() * colors.length)];

    // random delay for more natural explosion
    spark.style.animationDelay = (Math.random() * 0.2) + "s";

    fw.appendChild(spark);
  }

  container.appendChild(fw);

  setTimeout(() => fw.remove(), 1600);
}

// launch fireworks from bottom like real ones
function launchFirework() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight * 0.5;

  createFirework(x, y);
}

// continuous show
setInterval(launchFirework, 700);
document.addEventListener("click", function (e) {
  const overlay = document.getElementById("fireworks-overlay");

  const x = e.clientX;
  const y = e.clientY;

  const colors = [
    "#ff004c",
    "#00e5ff",
    "#ffff00",
    "#ff8c00",
    "#a855f7",
    "#00ff88",
    "#ff69b4"
  ];

  // 1. Neon ripple
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  overlay.appendChild(ripple);

  setTimeout(() => ripple.remove(), 800);

  // 2. Fireworks
  const firework = document.createElement("div");
  firework.className = "fw";
  firework.style.left = x + "px";
  firework.style.top = y + "px";

  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";

    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 90;

    spark.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );

    spark.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );

    const color = colors[
      Math.floor(Math.random() * colors.length)
    ];

    spark.style.background = color;
    spark.style.color = color;

    firework.appendChild(spark);
  }

  overlay.appendChild(firework);

  setTimeout(() => firework.remove(), 1400);

  // 3. Magic sparkles
  const symbols = ["✦", "✧", "✨", "⋆", "✴"];

  for (let i = 0; i < 7; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "magic";

    sparkle.innerHTML =
      symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    sparkle.style.color =
      colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.setProperty(
      "--mx",
      (Math.random() - 0.5) * 120 + "px"
    );

    sparkle.style.setProperty(
      "--my",
      (Math.random() - 0.5) * 120 + "px"
    );

    overlay.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1100);
  }
});
