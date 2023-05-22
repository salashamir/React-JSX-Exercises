const App = () => {
  const tweets = [
    {
      username: "cardillo23",
      name: "Juan Cardillo",
      date: new Date(Date.now()).toLocaleString(),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae. Elit ut aliquam purus sit amet.",
    },
    {
      username: "_excalibur_",
      name: "Jonathan Danvers Mayhew",
      date: new Date(Date.now()).toLocaleString(),
      message:
        "Nisl pretium fusce id velit ut tortor. Senectus et netus et malesuada fames ac turpis egestas sed. Bibendum ut tristique et egestas quis ipsum suspendisse.",
    },
    {
      username: "xyzjezz",
      name: "Jessica Cisneros",
      date: new Date(Date.now()).toLocaleString(),
      message:
        "Tellus integer feugiat scelerisque varius. Neque viverra justo nec ultrices dui sapien eget.",
    },
  ];
  return (
    <div>
      {tweets.map((t) => (
        <Tweet
          name={t.name}
          username={t.username}
          date={t.date}
          message={t.message}
        />
      ))}
    </div>
  );
};
