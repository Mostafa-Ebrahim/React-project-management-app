import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col py-2 text-sm">
      <label className="text-gray-700 font-semibold text-sm">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}
          rows="10"
          className="mt-1 p-2 border border-gray-300 rounded-xl text-sm"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="mt-1 p-2 border border-gray-300 rounded-xl text-sm"
          type="text"
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
