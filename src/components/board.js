import Row from "./row";
import { useEffect } from "react";
function Board({ boardState, setBoardState }) {
  let blankIndex = 8;
  for (let i = 0; i < boardState.length; ++i) {
    if (boardState[i] === 0) {
      blankIndex = i;
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 40) {
        if (blankIndex !== 0 && blankIndex !== 1 && blankIndex !== 2) {
          setBoardState((arr) => {
            let newBoardState = [];
            for (let i = 0; i < arr.length; i++) {
              if (i === blankIndex) {
                newBoardState.push(arr[blankIndex - 3]);
              } else if (i === blankIndex - 3) {
                newBoardState.push(0);
              } else {
                newBoardState.push(arr[i]);
              }
            }
            return newBoardState;
          });
          blankIndex = blankIndex - 3;
        }
      } else if (event.keyCode === 38) {
        if (blankIndex !== 6 && blankIndex !== 7 && blankIndex !== 8) {
          setBoardState((arr) => {
            let newBoardState = [];
            for (let i = 0; i < arr.length; i++) {
              if (i === blankIndex) {
                newBoardState.push(arr[blankIndex + 3]);
              } else if (i === blankIndex + 3) {
                newBoardState.push(0);
              } else {
                newBoardState.push(arr[i]);
              }
            }
            return newBoardState;
          });
          blankIndex = blankIndex + 3;
        }
      } else if (event.keyCode === 37) {
        if (blankIndex !== 2 && blankIndex !== 5 && blankIndex !== 8) {
          setBoardState((arr) => {
            let newBoardState = [];
            for (let i = 0; i < arr.length; i++) {
              if (i === blankIndex) {
                newBoardState.push(arr[blankIndex + 1]);
              } else if (i === blankIndex + 1) {
                newBoardState.push(0);
              } else {
                newBoardState.push(arr[i]);
              }
            }
            return newBoardState;
          });
          blankIndex = blankIndex + 1;
        }
      } else if (event.keyCode === 39) {
        if (blankIndex !== 0 && blankIndex !== 3 && blankIndex !== 6) {
          setBoardState((arr) => {
            let newBoardState = [];
            for (let i = 0; i < arr.length; i++) {
              if (i === blankIndex) {
                newBoardState.push(arr[blankIndex - 1]);
              } else if (i === blankIndex - 1) {
                newBoardState.push(0);
              } else {
                newBoardState.push(arr[i]);
              }
            }
            return newBoardState;
          });
          blankIndex = blankIndex - 1;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="board">
      <Row btns={boardState.slice(0, 3)} />
      <Row btns={boardState.slice(3, 6)} />
      <Row btns={boardState.slice(6, 9)} />
    </div>
  );
}

export default Board;
