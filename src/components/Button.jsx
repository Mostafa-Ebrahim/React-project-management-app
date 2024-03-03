export default function Button({ title }) {
  return (
    <button
      type="submit"
      className="text-blue-950 text-sm font-semibold hover:text-blue-600 mb-1 border bg-white px-3 py-2 hover:bg-violet-200 rounded-xl"
    >
      {title}
    </button>
  );
}
