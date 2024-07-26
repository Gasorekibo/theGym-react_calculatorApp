import PropTypes from "prop-types";
import Button from "./Button";
import data from "../utils/data.json";

const ButtonGroup = (props) => {
  return (
    <div className="grid grid-cols-4 ">
      {data.map((el) => {
        return <Button key={el.title} title={el.title} />;
      })}
    </div>
  );
};

ButtonGroup.propTypes = {};

export default ButtonGroup;
