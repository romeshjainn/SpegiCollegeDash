import { Outlet } from "react-router-dom";
import { NavBar } from "./comp/navBar";
import { navData } from "../../data/navData";
const Layout = () => {
  return (
    <div className="h-screen bg-[#eaeaea] bg-[red-600 ] flex overflow-y-hidden">
      <div className="p-2 w-1/4 list-none bg-[#232322]">
        <h1 className="text-center pb-2 text-white border-b-[.6px] border-white mb-4">
          Management Portal
        </h1>
        <NavBar data={navData} bgColor={"#00acc1"} />
      </div>
      <div className="overflow-y-scroll w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
