import { useState } from "react";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Colors } from "./lib/colors";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div
      className={`h-screen flex flex-col bg-radial transition-colors duration-600 ${
        mode ? Colors.lightMode.pageBackgroud : Colors.darkMode.pageBackgroud
      }`}
    >
      <Navbar
        mode={mode}
        setMode={setMode}
        colors={mode ? Colors.lightMode : Colors.darkMode}
      />
      <Main colors={mode ? Colors.lightMode : Colors.darkMode} />
    </div>
  );
}

export default App;
