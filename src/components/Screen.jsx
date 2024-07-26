import PropTypes from "prop-types";

const Screen = (props) => {
  return (
    <div className="text-white ">
      <input
        type="text"
        name="screen"
        className="w-full h-full bg-gray-500 py-2 px-2 outline-none text-4xl"
        readOnly
        dir="rtl"
        value={0}
      />
    </div>
  );
};

Screen.propTypes = {};

export default Screen;
