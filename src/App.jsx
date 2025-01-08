import "./App.css";
import Pads from "./components/pads";

const audio = [
  {
    key: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    name: "Heater 1",
  },
  {
    key: "W",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    name: "Heater 2",
  },
  {
    key: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    name: "Heater 3",
  },
  {
    key: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    name: "Heater 4",
  },
  {
    key: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    name: "Clap",
  },
  {
    key: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    name: "Open-HH",
  },
  {
    key: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat",
  },
  {
    key: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    name: "Kick",
  },
  {
    key: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    name: "Closed-HH",
  },
];

function App() {
  const playSong = (e) => {
    console.log(e.key);
    const song = audio.find((s) => s.key === e.key.toUpperCase());
    if (!song) return;
    document.getElementById(song.key).play().catch(console.error);
    document.getElementById("display").innerText = song.name;
  };

  return (
    <div
      className=" container border border-2 text-light p-2"
      style={{ height: "350px", width: "500px", backgroundColor: "#2e3b49" }}
      id="drum-machine"
      onKeyDown={playSong}
      tabIndex={0}
    >
      <h1>Drum Machine</h1>
      <div className=" container d-flex">
        <div className="drum-container d-flex flex-wrap justify-content-between" style={{ height:"250px", width: "50%"}}>
          {audio.map((clip) => (
            <Pads key={clip.key} clip={clip} />
          ))}
        </div>
        <div id={"display"} className=" d-flex justify-content-center w-50"></div>
      </div>
    </div>
  );
}

export default App;
