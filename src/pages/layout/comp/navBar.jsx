import PropTypes from "prop-types";
import { useState } from "react";

export const NavBar = ({ data, margin, bgColor }) => {
  const [expandMenu, setExpandMenu] = useState("Masters");
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <li
              style={{
                marginLeft: margin,
                backgroundColor: expandMenu == item?.label ? bgColor : "",
              }}
              className="p-2 rounded-sm text-white my-1 text-[2vh]"
              onClick={() => setExpandMenu(item?.label)}
            >
              {item?.label}
            </li>
            {expandMenu == item?.label ? (
              <NavBar
                data={item?.subNavs}
                margin={".8rem"}
                bgColor={"#00acc1"}
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
};

NavBar.propTypes = {
  data: PropTypes.array,
  margin: PropTypes.string,
  bgColor: PropTypes.string,
};
