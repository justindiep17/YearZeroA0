import Row from "./row";
function StaticBoard({ boardState }) {
  return (
    <div id="board-finished">
      <Row btns={boardState.slice(0, 3)} />
      <Row btns={boardState.slice(3, 6)} />
      <Row btns={boardState.slice(6, 9)} />
    </div>
  );
}

export default StaticBoard;
