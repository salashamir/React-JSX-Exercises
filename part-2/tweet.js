const Tweet = (props) => {
  const divStyle = {
    backgroundColor: "#f5f5dc",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "1rem",
    margin: "22px",
  };
  return (
    <div style={divStyle}>
      <p>@{props.username}</p>
      <h3>{props.name}</h3>
      <span>{props.date}:</span>
      <p>{props.message}</p>
    </div>
  );
};
