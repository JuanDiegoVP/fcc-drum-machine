import PropTypes from "prop-types";

export const Pads = ({ clip, setSoundName, colors }) => {
  const handlePlay = (clipAudio) => {
    document.getElementById(clipAudio.key).play().catch(console.error);
    setSoundName(clipAudio.name);
  };

  return (
    <button
      className={`text-light w-[60px] h-[60px]  rounded-2xl shadow-[-2px_-3px_6px_rgb(255,255,255,0.2),_5px_4px_6px_rgba(0,0,0,0.3)] ${colors.buttonBg} ${colors.buttonHover} focus:outline-none cursor-pointer ${colors.textOne}`}
      id={`drum-${clip.name}`}
      onClick={() => handlePlay(clip)}
    >
      <audio src={clip.url} id={clip.key}></audio>
      {clip.key}
    </button>
  );
};

Pads.propTypes = {
  clip: PropTypes.object,
  setSoundName: PropTypes.func,
  colors: PropTypes.object,
};
