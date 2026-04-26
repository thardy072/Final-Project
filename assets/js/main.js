let journey = [];

function addGame() {
  const game = document.getElementById("game").value;
  const date = document.getElementById("date").value;
  const image = document.getElementById("image").value;
  const consoleType = document.getElementById("console").value;

  if (!game || !date || !image) return;

  journey.push({ game, date, image, consoleType });

  // sort by date
  journey.sort((a, b) => new Date(a.date) - new Date(b.date));

  renderTimeline();
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  const line = document.getElementById("line");

  timeline.innerHTML = "";

  journey.forEach(item => {
    const card = document.createElement("div");
    card.className = `card ${item.consoleType}`;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.game}" />
      <div class="date">${item.date}</div>
      <div class="console">${item.consoleType}</div>
    `;

    timeline.appendChild(card);
  });

  // 🔥 Make the line match full width
  setTimeout(() => {
    line.style.width = timeline.scrollWidth + "px";
  }, 0);
}
