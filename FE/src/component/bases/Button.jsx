import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  onclick = () => {},
  children,
  className = " ",
}) => {
  return (
    <div>
      <button
        type={type}
        onclick={onclick}
        className={`btn-solid-lg bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
