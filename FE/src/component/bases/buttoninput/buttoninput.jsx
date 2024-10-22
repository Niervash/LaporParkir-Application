import React from "react";
import PropTypes from "prop-types";

export const ButtonInput = ({
  text,
  type = "button",
  className = "",
  onClick,
  icon,
}) => {
  return (
    <div>
      <button
        type={type}
        className={` shadow-xl mb-4 flex items-center text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  ${className}`}
        onClick={onClick}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    </div>
  );
};

ButtonInput.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
};
