import React from 'react';
import PropTypes from "prop-types";

const FileInput = ({ 
    htmlFor = 'file_input', 
    id = 'file_input',
    type = 'file'
    }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={htmlFor}>
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id={id}
        type={type}
      />
    </div>
  );
};

export default FileInput;
