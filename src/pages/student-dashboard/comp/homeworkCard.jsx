import { useEffect } from "react";

export const HomewordCard = ({
  imageUrl,
  subject,
  title,
  subtitle,
  dueDate,
}) => {
  return (
    <>
      <div className="min-h-[5.4rem] flex items-center gap-2 border-[1px] border-gray-600 rounded-md overflow-hidden p-2">
        <img
          className="max-h-[4.5rem] aspect-square rounded-md"
          src={imageUrl}
          alt=""
        />
        <div className="flex flex-col h-[4rem] justify-center ">
          <div>
            <h2 className="text-[#111a30]">{subject}</h2>
            <p className="text-gray-800 font-medium">{title}</p>
          </div>
          <p className="text-[2vh] text-gray-600 flex gap-2">
            {subtitle} ({dueDate})
          </p>
        </div>
      </div>
    </>
  );
};
