import { Outlet } from "react-router-dom";
import { NavBar } from "./comp/navBar";
import { navData } from "../../data/navData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Layout = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    toast.dismiss();
    toast.success("Welcome!");
  }, []);
  
  return (
    <div className="h-screen bg-[red-600 ] flex overflow-y-hidden">
      <div className={`p-2 ${showNavBar ? "w-1/4" : ""} list-none bg-white`}>
        <h1 className="text-center pb-2 text-black border-b-[.6px] border-white flex justify-between items-center">
          {showNavBar && "Management Portal"}
          <span>
            <img
              src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Burger_Menu-1024.png"
              alt=""
              className="h-8 w-8"
              onClick={() => setShowNavBar(!showNavBar)}
            />
          </span>
        </h1>

        {showNavBar && <NavBar data={navData} bgColor={"#1d4ed8"} />}
      </div>
      <div className="overflow-y-scroll w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
