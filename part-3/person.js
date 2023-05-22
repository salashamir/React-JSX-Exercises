const Person = (props) => {
  return (
    <div>
      <p>Learn some more information about this person</p>
      <h3>{props.age > 18 ? "please go vote" : "you must be 18"}</h3>
      <h5>{props.name.length > 8 ? props.name.slice(0, 6) : props.name}</h5>
      <p>Hobbies:</p>
      <ul>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
