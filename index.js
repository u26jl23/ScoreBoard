let initialScoreHome = 0;
let initialScoreGuest = 0;
let score1El = document.getElementById("score1");
let score2El = document.getElementById("score2");

function addHome1() {
  score1El.innerText = "";
  initialScoreHome += 1;
  score1El.innerText += initialScoreHome;
}

function addHome2() {
  score1El.innerText = "";
  initialScoreHome += 2;
  score1El.innerText += initialScoreHome;
}

function addHome3() {
  score1El.innerText = "";
  initialScoreHome += 3;
  score1El.innerText += initialScoreHome;
}

function addGuest1() {
  score2El.innerText = "";
  initialScoreGuest += 1;
  score2El.innerText += initialScoreGuest;
}

function addGuest2() {
  score2El.innerText = "";
  initialScoreGuest += 2;
  score2El.innerText += initialScoreGuest;
}

function addGuest3() {
  score2El.innerText = "";
  initialScoreGuest += 3;
  score2El.innerText += initialScoreGuest;
}
