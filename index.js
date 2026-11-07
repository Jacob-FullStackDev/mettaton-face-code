"use strict";
const allCells = document.getElementsByClassName("c");

function toggleClassNames(addClass, cell) {
  cell.classList.remove(cell.classList[1]);
  void cell.offsetHeight;
  cell.classList.add(addClass);
}
function changeClassOnAllCells(addClass) {
  // yellow, yellow--animated, blue--animated, red, red--animated
  for (const cell of allCells) {
    toggleClassNames(addClass, cell);
  }
}

function one() {
  for (const cell of allCells) {
    if (
      cell.id === "c3" ||
      cell.id === "c7" ||
      cell.id === "c8" ||
      cell.id === "c13" ||
      cell.id === "c17" ||
      cell.id === "c18" ||
      cell.id === "c19"
    ) {
      toggleClassNames("red--animated", cell);
    } else {
      toggleClassNames("yellow--animated", cell);
    }
  }
}

function m() {
  for (const cell of allCells) {
    if (
      cell.id === "c2" ||
      cell.id === "c3" ||
      cell.id === "c4" ||
      cell.id === "c2" ||
      cell.id === "c8" ||
      cell.id === "c12" ||
      cell.id === "c14" ||
      cell.id === "c17" ||
      cell.id === "c18" ||
      cell.id === "c19"
    ) {
      toggleClassNames("yellow--animated", cell);
    } else {
      toggleClassNames("red--animated", cell);
    }
  }
}

function heart() {
  for (const cell of allCells) {
    if (
      cell.id === "c1" ||
      cell.id === "c3" ||
      cell.id === "c5" ||
      cell.id === "c11" ||
      cell.id === "c15" ||
      cell.id === "c16" ||
      cell.id === "c17" ||
      cell.id === "c19" ||
      cell.id === "c20"
    ) {
      toggleClassNames("yellow--animated", cell);
    } else {
      toggleClassNames("red--animated", cell);
    }
  }
}
const globalState = {
  previousResult: 1,
  currentResult: 1,
  mode: "manual",
  timer: null,
};
function handleAutomaticScreenChange() {
  if (globalState.mode === "automatic") {
    globalState.previousResult = globalState.currentResult;
    globalState.currentResult = Math.round(Math.random() * 7 + 1);
    while (globalState.currentResult === globalState.previousResult) {
      globalState.currentResult = Math.round(Math.random() * 7 + 1);
    }
  }
}
function callScreenFunction() {
  handleAutomaticScreenChange();
  if (globalState.currentResult === 1) changeClassOnAllCells("yellow");
  else if (globalState.currentResult === 2)
    changeClassOnAllCells("yellow--animated");
  else if (globalState.currentResult === 3) m();
  else if (globalState.currentResult === 4)
    changeClassOnAllCells("blue--animated");
  else if (globalState.currentResult === 5) one();
  else if (globalState.currentResult === 6)
    changeClassOnAllCells("red--animated");
  else if (globalState.currentResult === 7) changeClassOnAllCells("red");
  else if (globalState.currentResult === 8) heart();
  else {
    heart();
    console.error("currentResult does not map to a function call");
  }
}

function randomlyChangeScreen() {
  globalState.timer = setTimeout(
    () => {
      callScreenFunction();
      randomlyChangeScreen();
    },
    Math.round(Math.random() * 5000) + 3000,
  );
}

const modeToggleEl = document.getElementById("c8");
function toggleMode() {
  if (globalState.mode === "automatic") {
    globalState.mode = "manual";
    clearTimeout(globalState.timer);
  } else if (globalState.mode === "manual") {
    globalState.mode = "automatic";
    randomlyChangeScreen();
  }
}
modeToggleEl.addEventListener("click", () => {
  toggleMode();
});
document.addEventListener("click", (e) => {
  if (globalState.mode === "manual" && e.target.id !== "c8") {
    if (globalState.currentResult < 8) {
      globalState.currentResult += 1;
    } else {
      globalState.currentResult = 1;
    }
    callScreenFunction();
  }
});
