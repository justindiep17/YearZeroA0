import Button from "./button";

function Row({ btns }) {
  return (
    <div className="btn-row">
      <Button value={btns[0]} />
      <Button value={btns[1]} />
      <Button value={btns[2]} />
    </div>
  );
}

export default Row;
