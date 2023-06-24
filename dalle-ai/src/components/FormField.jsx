import React from "react";

const FormField = ({
  name,
  type,
  label,
  value,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-2 mb-3">
        <label
          htmlFor={name}
          className="capitalize font-medium text-sm text-gray-900"
        >
          {name}
        </label>
        <input
          className="bg-gray-100 border
           border-gray-300 text-gray-700 
           text-sm focus:ring-purple focus:border-purple outline-none block w-full p-3"
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
        {isSurpriseMe && (
          <button
            type="button"
            className="font-semibold text-sm
             bg-gray-200 text-black px-4 py-2 rounded"
            onClick={handleSurpriseMe}
          >
            Surprise me
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
