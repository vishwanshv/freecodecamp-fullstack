const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Sergio Almirón", position: "forward", isCaptain: false },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Ricardo Bochini", position: "midfielder", isCaptain: false },
    { name: "Claudio Borghi", position: "midfielder", isCaptain: false },
    { name: "José Luis Brown", position: "defender", isCaptain: false },
    { name: "Daniel Passarella", position: "defender", isCaptain: false },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Néstor Clausen", position: "defender", isCaptain: false },
    { name: "José Luis Cuciuffo", position: "defender", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Héctor Enrique", position: "midfielder", isCaptain: false },
    { name: "Oscar Garré", position: "defender", isCaptain: false },
    { name: "Ricardo Giusti", position: "midfielder", isCaptain: false },
    { name: "Luis Islas", position: "goalkeeper", isCaptain: false },
    { name: "Julio Olarticoechea", position: "defender", isCaptain: false },
    { name: "Pedro Pasculli", position: "forward", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Carlos Tapia", position: "midfielder", isCaptain: false },
    { name: "Marcelo Trobbiani", position: "midfielder", isCaptain: false },
    { name: "Héctor Zelada", position: "goalkeeper", isCaptain: false }
  ]
};

Object.freeze(footballTeam);

const { team, year, headCoach, players } = footballTeam;

// Target elements
const headCoachSpan = document.getElementById("head-coach");
const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const playerFilter = document.getElementById("players");

// Display team information (passes test 10 check)
headCoachSpan.textContent = headCoach;
teamSpan.textContent = team;
yearSpan.textContent = year;

// Function to render player cards
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, isCaptain }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `
    )
    .join("");
};

// Filter event listener
playerFilter.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
    default:
      setPlayerCards();
      break;
  }
});

// Initial display
setPlayerCards();