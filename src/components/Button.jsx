import PropTypes from "prop-types";

const Button = ({ title, value }) => {
  return (
    <div>
      <button
        value={value}
        className="font-semibold py-12 w-full text-2xl bg-gray-300 px-7 border border-gray-600"
      >
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
