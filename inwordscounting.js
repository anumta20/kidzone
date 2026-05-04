const container = document.getElementById("numbersContainer");

const words = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
  "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four", "Twenty Five", "Twenty Six", "Twenty Seven", "Twenty Eight", "Twenty Nine", "Thirty",
  "Thirty One", "Thirty Two", "Thirty Three", "Thirty Four", "Thirty Five", "Thirty Six", "Thirty Seven", "Thirty Eight", "Thirty Nine", "Forty",
  "Forty One", "Forty Two", "Forty Three", "Forty Four", "Forty Five", "Forty Six", "Forty Seven", "Forty Eight", "Forty Nine", "Fifty",
  "Fifty One", "Fifty Two", "Fifty Three", "Fifty Four", "Fifty Five", "Fifty Six", "Fifty Seven", "Fifty Eight", "Fifty Nine", "Sixty",
  "Sixty One", "Sixty Two", "Sixty Three", "Sixty Four", "Sixty Five", "Sixty Six", "Sixty Seven", "Sixty Eight", "Sixty Nine", "Seventy",
  "Seventy One", "Seventy Two", "Seventy Three", "Seventy Four", "Seventy Five", "Seventy Six", "Seventy Seven", "Seventy Eight", "Seventy Nine", "Eighty",
  "Eighty One", "Eighty Two", "Eighty Three", "Eighty Four", "Eighty Five", "Eighty Six", "Eighty Seven", "Eighty Eight", "Eighty Nine", "Ninety",
  "Ninety One", "Ninety Two", "Ninety Three", "Ninety Four", "Ninety Five", "Ninety Six", "Ninety Seven", "Ninety Eight", "Ninety Nine", "One Hundred"
];

const cardColors = [
  { bg: "linear-gradient(135deg, #FF6B6B, #ee5a24)", border: "#ffb8b8" },
  { bg: "linear-gradient(135deg, #ff9f43, #e67e22)", border: "#ffd7a8" },
  { bg: "linear-gradient(135deg, #feca57, #f39c12)", border: "#fff0a0" },
  { bg: "linear-gradient(135deg, #1dd1a1, #10ac84)", border: "#a0f0d8" },
  { bg: "linear-gradient(135deg, #48dbfb, #00abcf)", border: "#aaf0ff" },
  { bg: "linear-gradient(135deg, #54a0ff, #2980b9)", border: "#aad0ff" },
  { bg: "linear-gradient(135deg, #5f27cd, #8e44ad)", border: "#c9aaff" },
  { bg: "linear-gradient(135deg, #ff6b81, #c0392b)", border: "#ffaab8" },
  { bg: "linear-gradient(135deg, #00d2d3, #0097a7)", border: "#a0f0f0" },
  { bg: "linear-gradient(135deg, #fd79a8, #e91e8c)", border: "#ffb8da" },
];

const emojis = ["", "", "", "", "", "", "", "", "", ""];

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 0.85;
  speech.pitch = 1.2;
  window.speechSynthesis.speak(speech);
}

for (let i = 1; i <= 100; i++) {
  const colorIndex = (i - 1) % 10;
  const color = cardColors[colorIndex];
  const emoji = emojis[colorIndex];

  const card = document.createElement("div");
  card.className = "num-card";
  card.style.background = color.bg;
  card.style.borderColor = color.border;

  card.innerHTML = `
    <span class="num-emoji">${emoji}</span>
    <div class="num-big">${i}</div>
    <div class="num-word">${words[i]}</div>
    <button class="listen-btn" onclick="event.stopPropagation(); speak('${words[i]}')">
      🔊 Listen
    </button>
  `;

  container.appendChild(card);
}
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

mobileMenuToggle.addEventListener('click', function () {
  sidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && sidebar.classList.contains('active')) {
    closeSidebar();
  }
});

const sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
  link.addEventListener('click', function () {
    closeSidebar();
  });
});