import "./App.css";
const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];

function App() {
  return (
    <div className="container">
      {colors.map((item) => (
        <div key={item} className={item}></div>
      ))}
    </div>
  );
}

export default App;
