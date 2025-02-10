import PropTypes from "prop-types";
import { GiAudioCassette } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Navbar = ({ mode, setMode, colors }) => {
  return (
    <nav className={`h-20 mb-2 flex items-center justify-between p-3 ${colors.navbarShadow}`}>
      <div className={`flex items-center ${colors.textOne}`}>
        <GiAudioCassette className="mr-1 size-8" />
        <p className="font-poller text-xl">DRUM MACHINE</p>
      </div>
      <div>
        <button
          onClick={() => setMode((prev) => !prev)}
          className=" w-10 h-5 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow"
        >
          <div
            className={`w-6 h-6 rounded-full transition duration-500 transform p-1 text-white ${
              mode
                ? "bg-yellow-500 -translate-x-2"
                : "bg-gray-700 translate-x-full"
            }`}
          >
            {mode ? <MdLightMode /> : <MdDarkMode />}
          </div>
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  mode: PropTypes.bool,
  setMode: PropTypes.func,
  colors: PropTypes.object,
};
