export default function Input({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col py-2 text-sm">
      <label className="text-gray-700 font-semibold text-sm">{label}</label>
      {textarea ? (
        <textarea
          className="mt-1 p-3.5 border border-gray-300 rounded-xl text-sm"
          {...props}
        />
      ) : (
        <input
          className="mt-1 p-3.5 border border-gray-300 rounded-xl text-sm"
          type="text"
          {...props}
        />
      )}
    </p>
  );
}
