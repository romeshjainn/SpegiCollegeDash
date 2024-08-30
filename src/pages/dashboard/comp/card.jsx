import PropTypes from "prop-types";

export const Card = ({ label, value, bgColor }) => {
  return (
    <div className="rounded-md p-4 w-[25%] min-h-[120px] relative shadow-md border-[2px] border-gray-300 flex justify-end">
      <p
        style={{ background: bgColor }}
        className="rounded-md w-[70px] grid place-items-center h-[70px] absolute bottom-[60%] left-[10%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8 text-white "
        >
          <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" />
        </svg>
      </p>

      <div className="text-end">
        <p className="text-[2.6vh] font-semibold">{label}</p>
        <p className="text-[5vh] mr-1">{value}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bgColor: PropTypes.string,
};
