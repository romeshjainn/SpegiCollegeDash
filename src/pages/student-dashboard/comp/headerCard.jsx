export const HeaderCard = () => {
  return (
    <header className="rounded-2xl w-full">
      <div className="border-2 flex items-center gap-2 border-black bg-[#202c4b] rounded-xl">
        <div className="h-[150px] aspect-square p-1 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN29ucAN8zBzmWzb4S49ZxX0YTcTa7tyhedA&s"
            alt=""
            className="rounded-[.5rem] ml-[.6px]"
          />
        </div>
        <div className="text-white p-2 w-full">
          <div className="border-b-2 mt-2 border-dotted border-white pb-2">
            <h3 className="font-semibold text-2xl">Emma Watson</h3>
            <p className=" w-full">Class : VIII, A || Roll No : 34212</p>
          </div>
          <div className="py-3 flex justify-between items-center">
            <h1>
              1st Quaterly{" "}
              <span className="px-2 rounded-md bg-green-600">pass</span>
            </h1>
            <button className="bg-blue-600 text-white p-2 rounded-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
