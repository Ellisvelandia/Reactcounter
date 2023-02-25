import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ name, title, subTitle }) => {
  return (
    <>
      <h1>{name}</h1>
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      <p>{title}</p>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  subTitle: "estoy por defecto aqui",
};

export default FirstApp;
