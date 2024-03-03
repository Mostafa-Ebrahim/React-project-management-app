export default function Button({ children, ...props }) {
  return (
    <button
      className="text-blue-950 text-sm font-semibold hover:text-blue-600 mb-1 border bg-white px-3 py-2 hover:bg-violet-200 rounded-xl"
      {...props}
    >
      {children}
    </button>
  );
}
