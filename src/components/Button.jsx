import { useDispatch } from 'react-redux';
import { calculate } from '../redux/calculatorSlice';
const Button = ({ title, value, zeroStyle,operatorStyle }) => {
  const dispatch = useDispatch()
  return (
    <button
    onClick={()=> dispatch(calculate(title))}
      value={value}
      className={`
          ${zeroStyle}
           font-semibold py-12 w-full  text-2xl bg-gray-300 px-7 border border-gray-600
        ${operatorStyle} text-4xl`}
    >
      {title}
    </button>
  );
};

export default Button;
