import PropTypes from 'prop-types';

const Button = ({ title, value, zeroStyle }) => {
  return (
    <button
      value={value}
      className={`
          ${zeroStyle}
           font-semibold py-12 w-full  text-2xl bg-gray-300 px-7 border border-gray-600
        `}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
