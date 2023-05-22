const App = () => {
  const people = [
    {
      name: "Donovan Buckley",
      age: 29,
      hobbies: ["fishing", "whitewater rafting", "playing hockey"],
    },
    {
      name: "Marcia Beezlewaite",
      age: 34,
      hobbies: ["reading", "making tea", "watching netflix with cat"],
    },
    {
      name: "Juan Ignacio",
      age: 18,
      hobbies: ["playing soccer", "making horchata", "being a player"],
    },
  ];

  return (
    <div>
      {people.map((p) => (
        <Person name={p.name} age={p.age} hobbies={p.hobbies} />
      ))}
    </div>
  );
};
