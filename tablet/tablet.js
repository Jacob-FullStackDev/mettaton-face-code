"use strict";
const allCells = document.getElementsByClassName("c");

function initialColor() {
  for (const cell of allCells) {
    cell.classList.remove(cell.classList[1]);
    void cell.offsetHeight;
    cell.classList.add("initial");
  }
}

function yellow() {
  for (const cell of allCells) {
    cell.classList.remove(cell.classList[1]);
    void cell.offsetHeight;
    cell.classList.add("yellow");
  }
}

function blue() {
  for (const cell of allCells) {
    cell.classList.remove(cell.classList[1]);
    void cell.offsetHeight;
    cell.classList.add("blue");
  }
}

function red() {
  for (const cell of allCells) {
    cell.classList.remove(cell.classList[1]);
    void cell.offsetHeight;
    cell.classList.add("red");
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
      cell.classList.remove(cell.classList[1]);
      void cell.offsetHeight;
      cell.classList.add("red");
    } else {
      cell.classList.remove(cell.classList[1]);
      void cell.offsetHeight;
      cell.classList.add("yellow");
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
      cell.classList.remove(cell.classList[1]);
      void cell.offsetHeight;
      cell.classList.add("yellow");
    } else {
      cell.classList.remove(cell.classList[1]);
      void cell.offsetHeight;
      cell.classList.add("red");
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
      cell.classList.remove(cell.classList[1]);
      void cell.offsetHeight;
      cell.classList.add("yellow");
    } else {
      cell.classList.remove(cell.classList[1]);
      void cell.offsetHeight;
      cell.classList.add("red");
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
  if (funcId === 1) initialColor();
  else if (funcId === 2) yellow();
  else if (funcId === 3) red();
  else if (funcId === 4) blue();
  else if (funcId === 5) heart();
  else if (funcId === 6) one();
  else m();
}

function randomlyChangeScreen() {
  setTimeout(
    () => {
      randomlyChangeScreen();
      callRandomScreenFunction();
    },
    Math.round(Math.random() * 10000) + 5000,
  );
}

randomlyChangeScreen();
