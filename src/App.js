import "./App.css";
import { useState, useEffect } from "react";
import Board from "./components/board";
import StaticBoard from "./components/staticboard";
function App() {
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  function gameFinished(a) {
    if (
      a[0] === 1 &&
      a[1] === 2 &&
      a[2] === 3 &&
      a[3] === 4 &&
      a[4] === 5 &&
      a[5] === 6 &&
      a[6] === 7 &&
      a[7] === 8 &&
      a[8] === 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  const getInitialVal = () => {
    let a = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

    a.push(0);
    return a;
  };

  const [boardState, setBoardState] = useState(getInitialVal);
  if (gameFinished(boardState)) {
    return (
      <main id="app">
        <StaticBoard boardState={boardState}></StaticBoard>
      </main>
    );
  } else {
    return (
      <main id="app">
        <Board boardState={boardState} setBoardState={setBoardState}></Board>
      </main>
    );
  }
}

export default App;
