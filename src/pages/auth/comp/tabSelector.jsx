export const TabSelector = ({ selectedTab, handleTabChange }) => {
  return (
    <div className="mt-2 flex w-full p-1 bg-[#e5e4df] rounded-2xl">
      <button
        style={{
          backgroundColor: selectedTab == "student" ? "white" : "",
          color: selectedTab == "student" ? "black" : "",
        }}
        onClick={() => handleTabChange("student")}
        className="w-1/2 font-semibold p-2 rounded-l-2xl"
      >
        Student
      </button>
      <button
        style={{
          backgroundColor: selectedTab == "institute" ? "white" : "",
          color: selectedTab == "student" ? "black" : "",
        }}
        onClick={() => handleTabChange("institute")}
        className="w-1/2 p-2 rounded-r-2xl font-semibold"
      >
        College / Institute
      </button>
    </div>
  );
};
