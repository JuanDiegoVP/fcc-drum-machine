import PropTypes from "prop-types";
import { useState } from "react";
import { SoundsContainer } from "./SoundsContainer";
import { heaterSounds } from "../lib/audios";
import { kickSounds } from "../lib/audios";
import { clapSounds } from "../lib/audios";
import { openSounds } from "../lib/audios";
import { closedSounds } from "../lib/audios";
import { classes } from "../lib/classes";
import { allSounds } from "../lib/audios";

export const Main = ({ colors }) => {
  const [soundName, setSoundName] = useState("");

  const playHeaterSounds = (e) => {
    const song = allSounds.find((s) => s.key === e.key.toUpperCase());
    if (!song) return;
    document.getElementById(song.key).play().catch(console.error);
    setSoundName(song.name);
  };

  return (
    <div
      onKeyDown={playHeaterSounds}
      className=" flex flex-1 w-full text-light p-2 text-white outline-none"
      id="drum-machine"
      tabIndex={0}
    >
      <div className=" grid grid-rows-3 grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full ">
        <SoundsContainer
          setSoundName={setSoundName}
          sound={closedSounds}
          classes={classes.closed}
          colors={colors}
        />
        <SoundsContainer
          setSoundName={setSoundName}
          sound={openSounds}
          classes={classes.open}
          colors={colors}
        />
        <SoundsContainer
          setSoundName={setSoundName}
          sound={clapSounds}
          classes={classes.clap}
          colors={colors}
        />
        <SoundsContainer
          setSoundName={setSoundName}
          sound={kickSounds}
          classes={classes.kick}
          colors={colors}
        />
        <SoundsContainer
          setSoundName={setSoundName}
          sound={heaterSounds}
          classes={classes.heater}
          colors={colors}
        />
        <div className={`grid row-span-4 col-span-2 md:col-span-3 lg:col-span-4 row-start-1 col-start-2 items-center justify-center ${colors.textOne} text-3xl font-poller`}>
          {soundName}
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  colors: PropTypes.object,
};
