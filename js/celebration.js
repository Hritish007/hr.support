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