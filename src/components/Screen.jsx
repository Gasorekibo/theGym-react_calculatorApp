import { useSelector } from 'react-redux';
const Screen = () => {
  const { value } = useSelector((store) => store.value);
  return (
    <div className="text-white ">
      <input
        type="text"
        name="screen"
        className="w-full h-full bg-gray-500 py-2 px-2 outline-none text-4xl"
        readOnly
        dir="rtl"
        value={value}
      />
    </div>
  );
};

Screen.propTypes = {};

export default Screen;
