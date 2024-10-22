import React from 'react';

const InputForm = ({ 
  type = 'text',
  id = 'large-input'
   }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default InputForm;
