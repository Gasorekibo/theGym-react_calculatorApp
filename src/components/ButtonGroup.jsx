import PropTypes from "prop-types";
import Button from "./Button";
import data from "../utils/data.json";

const ButtonGroup = () => {
  return (
    <div className="grid grid-cols-4">
      {data.map((el) => <Button key={el.title} zeroStyle={el.title === '0' ? "col-span-2":""} title={el.title}/>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {};

export default ButtonGroup;
