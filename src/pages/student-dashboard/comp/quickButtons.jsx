export const QuickButtons = ({ color, label, jsxIcons, fontColor }) => {
  return (
    <button
      style={{ backgroundColor: color, color: fontColor }}
      className="flex flex-col gap-1 rounded-md  items-center justify-center h-[5rem] w-[5rem] aspect-square p-2 text-white"
    >
      {jsxIcons}
      <p className="text-[2vh]">{label}</p>
    </button>
  );
};
