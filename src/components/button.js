function Button({ value }) {
  if (value == 0) {
    return <div className="btn" id="blank-btn"></div>;
  } else {
    return <div className="btn">{value}</div>;
  }
}

export default Button;
