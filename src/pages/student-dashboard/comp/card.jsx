export const Card = ({ label, count, subtitle, color, textColor }) => {
  return (
    <div
      style={{ backgroundColor: "white", color: textColor }}
      className="place-items-center rounded-md p-4 w-[25%] min-h-[140px] relative flex items-center justify-end"
    >
      <div>
        <p className="text-3xl text-end font-semibold">{count}</p>
        <p className="text-1xl font-medium">
          {label} <span>{subtitle}</span>
        </p>
      </div>
    </div>
  );
};
