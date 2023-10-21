console.log('Jay Bhagvan');

// Variable Declaration
var turn = 'X';
var win = [];
var count = 0;
const result = document.getElementById('result');
const button = document.getElementById('btn');
const Turn = document.getElementById('turn');
const line = document.getElementById('line');

// const box = document.getElementsByClassName('box'); // It give HTMLCollection
const box = document.querySelectorAll('.box'); // It gives a NodeList.
console.log(box);

// win Array set wit " "
function setZero() {
  for (let i = 1; i <= 3; i++) {
    win[i] = [];
    for (let j = 1; j <= 3; j++) {
      win[i][j] = " ";
    }
  }
}
setZero();

// Add Event Listener on button
button.addEventListener('click', () => {
  setZero();
  count = 0;
  box.forEach((e) => {
    e.innerHTML = ``;
  })
  result.innerHTML = ``;
  line.style.display = 'none';
})

// Add Event Listener for every box
box.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.innerHTML === "") {
      e.innerHTML = turn;
      const id = parseInt(e.id);
      const row = parseInt(id / 10);
      const col = parseInt(id % 10);
      win[row][col] = turn;
      const WIN = checkWinInRow() || checkWinInCol() || checkWinInCros1() || checkWinInCros2();
      console.log(WIN)
      if (WIN) {
        console.log(`${turn} Won the match`);
        result.innerHTML = `<h3>${turn} Won the match</h3>`;
      }
      if (turn === 'X')
        turn = 'O';
      else
        turn = 'X';
      Turn.innerHTML = `Turn : ${turn}`;
    }
  })
})

// logic for wining in rows
function checkWinInRow() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (checkforRow(i)) {
        if (win[i][j] === win[i][1]) {
          count++;
        }
        else {
          count = 0;
          break;
        }
        if (count === 3) {
          count = 0;
          line.style.transform = 'rotate(90deg)';
          line.style.display = 'block';
          line.style.left = '50%';
          if (i === 1) {
            line.style.top = '-34%';
          }
          else if (i === 2) {
            line.style.top = '0%';
          }
          else {
            line.style.top = '34%';
          }
          return true;
        }
      }
      else {
        count = 0;
        break;
      }
    }
  }
  count = 0;
  return false;
}

// logic for wining in columns
function checkWinInCol() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (checkforCol(i)) {
        if (win[j][i] === win[1][i]) {
          count++;
        }
        else {
          count = 0;
          break;
        }
        if (count === 3) {
          count = 0;
          line.style.transform = 'rotate(0deg)';
          line.style.display = 'block';
          line.style.top = '0%';
          if (i === 1) {
            line.style.left = '15%';
          }
          else if (i === 2) {
            line.style.left = '49%';
          }
          else {
            line.style.left = '83%';
          }
          return true;
        }
      }
      else {
        count = 0;
        break;
      }
    }
  }
  count = 0;
  return false;
}

// logic for wining in crows
function checkWinInCros1() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === j && checkWinCros()) {
        if (win[i][j] === win[1][1]) {
          count++;
        }
      }
    }
  }
  if (count === 3) {
    count = 0;
    line.style.transform = 'rotate(135deg)';
    line.style.display = 'block';
    line.style.left = '50%';
    line.style.top = '1%';
    return true;
  }
  else {
    count = 0;
    return false;
  }
}

// logic for wining in crows
function checkWinInCros2() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (j === 4 - i && checkWinCros2()) {
        if (win[i][4 - i] === win[1][3]) {
          count++;
        }
      }
    }
  }
  if (count === 3) {
    count = 0;
    line.style.transform = 'rotate(45deg)';
    line.style.display = 'block';
    line.style.left = '50%';
    line.style.top = '-1%';
    return true;
  }
  else {
    count = 0;
    return false;
  }
}


function checkforRow(i) {
  if (win[i][1] === 'X' || win[i][1] === 'O') {
    return true;
  }
  else {
    return false;
  }
}

function checkforCol(i) {
  if (win[1][i] === 'X' || win[1][i] === 'O') {
    return true;
  }
  else {
    return false;
  }
}

function checkWinCros() {
  if (win[1][1] === 'X' || win[1][1] === 'O') {
    return true;
  }
  else {
    return false;
  }
}

function checkWinCros2() {
  if (win[1][3] === 'X' || win[1][3] === 'O') {
    return true;
  }
  else {
    return false;
  }
}