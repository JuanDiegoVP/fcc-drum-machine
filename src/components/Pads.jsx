const Pads = ({ clip }) => {
  const handlePlay = (clipAudio) => {
    document.getElementById(clipAudio.key).play().catch(console.error);
    document.getElementById("display").innerText = clip.name;
  };

  return (
    <button
      className="drum-pad shadow-sm border-1 bg-secondary text-light"
      style={{height: "70px", width: "70px"}}
      id={`drum-${clip.name}`}
      onClick={() => handlePlay(clip)}
    >
      <audio src={clip.url} id={clip.key} className="clip"></audio>
      {clip.key}
    </button>
  );
};

export default Pads;
