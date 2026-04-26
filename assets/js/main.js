let journey = [];

function addGame() {
  const game = document.getElementById("game").value;
  const year = document.getElementById("year").value;
  const mood = document.getElementById("mood").value;

  if (!game || !year) return;

  const entry = { game, year, mood };
  journey.push(entry);

  renderTimeline();

  document.getElementById("game").value = "";
  document.getElementById("year").value = "";
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";

  journey.forEach(item => {
    const div = document.createElement("div");
    div.className = `entry ${item.mood}`;
    div.innerHTML = `
      <h3>${item.game}</h3>
      <p>${item.year}</p>
      <small>${item.mood}</small>
    `;
    timeline.appendChild(div);
  });
}
