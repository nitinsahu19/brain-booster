
 function Button({ label, active }) {
  return (
    <button
      className={`px-4 py-1 text-sm rounded-full border cursor-pointer hover:bg-blue-600  ${
        active ? " text-black border-gray-300" : "bg-white text-black border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
export default Button;