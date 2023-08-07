let $cells = Array.from(document.querySelectorAll(".cell"));
console.log($cells);
const message = document.querySelector(".message");
console.log(message);
let user = "O";
let testForWinner = true;
console.log(Array.isArray($cells) === true);

for (let cell of $cells) {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "" && testForWinner) {
      cell.innerHTML = changeTurnXO();
      checkForWinner();
      checkForDraw();
    } else {
      console.log(cell);
      console.log("you are blocked");
    }
  });
}

function changeTurnXO() {
  return (user = user === "O" ? "X" : "O");
}

const winningOption = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];
function checkForWinner() {
  winningOption.forEach(function (combination) {
    let check = combination.every((idx) => $cells[idx].innerHTML === user);
    if (check) {
      message.innerHTML = `player ${user} has won!!`;
      testForWinner = false;
    }
  });
}
function checkForDraw() {
  let draw = $cells.every((index) => index.textContent !== "");
  if (draw && testForWinner) {
    message.innerHTML = "its a draw, Do it the same but better 🤣";
  }
}
function restartTheGame() {
  testForWinner = true;
  for (let index of $cells) {
    index.innerHTML = "";
  }
  message.innerHTML = "";
}

// function checkForWinner(){
//   for(let index of winningOption){
//     if(($cells[0].innerHTML===$cells[3].innerHTML) &&($cells[0].innerHTML===$cells[6].innerHTML)){

//     }
//   }
// }
// function checkWinner(player) {
//   for (const option of winningOption) {
//     const [a, b, c] = option;
//     if (
//       $cells[a].innerHTML === player &&
//       $cells[b].innerHTML === player &&
//       $cells[c].innerHTML === player
//     ) {
//       console.log(b);
//       return true; // Player has won
//     }
//   }

// }
