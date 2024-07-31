import React from "react";
import PropTypes from "prop-types";
import Screen from "./Screen";
import ButtonGroup from "./ButtonGroup";

const Layout = () => {
  return (
    <>
      <div className="max-w-md mx-auto my-40">
        <Screen />
        <ButtonGroup />
      </div>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
