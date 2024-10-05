export const FeesCard = ({ title, fees, subTitle, date, isDue }) => {
  return (
    <div className="flex items-center gap-2 p-1 px-2  bg-white border-[1px] border-gray-600 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-14 text-blue-700"
      >
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
        <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
      </svg>

      <div className="w-full text-[2.5vh]">
        <h3 className="flex items-center">
          {title}{" "}
          {isDue && (
            <span className="ml-1 bg-red-600 text-white px-2 rounded-xl text-[1.9vh]">
              Late
            </span>
          )}
        </h3>
        <p style={{ color: isDue ? "red" : "" }}>
          {fees} {isDue && <span> + 100 </span>}
        </p>
      </div>
      <div className="text-nowrap text-[2vh]">
        <h3>{subTitle}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};
