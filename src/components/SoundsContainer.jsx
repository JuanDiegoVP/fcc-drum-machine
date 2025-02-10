import PropTypes from "prop-types";
import { Pads } from "./Pads";

export const SoundsContainer = ({ setSoundName, sound, classes, colors }) => {
  const playHeaterSounds = (e) => {
    const song = sound.find((s) => s.key === e.key.toUpperCase());
    if (!song) return;
    document.getElementById(song.key).play().catch(console.error);
    setSoundName(song.name);
  };

  return (
    <div
      onKeyDown={playHeaterSounds}
      tabIndex={0}
      className={`${classes} items-center justify-items-center ${colors.soundContainerBorder} rounded-2xl`}
    >
      {sound.map((clip) => (
        <Pads
          key={clip.key}
          clip={clip}
          setSoundName={setSoundName}
          colors={colors}
        />
      ))}
    </div>
  );
};
SoundsContainer.propTypes = {
  setSoundName: PropTypes.func,
  sound: PropTypes.array,
  classes: PropTypes.string,
  colors: PropTypes.object,
};
