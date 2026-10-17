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

let previousResult;

function callRandomScreenFunction() {
  let funcId = Math.round(Math.random() * 7 + 1);
  while (funcId === previousResult) {
    funcId = Math.round(Math.random() * 7 + 1);
  }
  previousResult = funcId;
  if (funcId === 1) changeClassOnAllCells("yellow");
  else if (funcId === 2) changeClassOnAllCells("yellow--animated");
  else if (funcId === 3) changeClassOnAllCells("red");
  else if (funcId === 4) changeClassOnAllCells("red--animated");
  else if (funcId === 5) changeClassOnAllCells("blue--animated");
  else if (funcId === 6) one();
  else if (funcId === 7) m();
  else heart();
}

function randomlyChangeScreen() {
  setTimeout(
    () => {
      randomlyChangeScreen();
      callRandomScreenFunction();
    },
    Math.round(Math.random() * 3000) + 5000,
  );
}

randomlyChangeScreen();
