import { useState } from "react";

const PayFees = () => {
  const [tableData, setTableData] = useState([
    {
      title: "",
      label: "",
      description: "",
      duration: "",
      status: false,
    },
    {
      title: "",
      label: "",
      description: "",
      duration: "",
      status: true,
    },
  ]);
  return (
    <div className="p-6 px-32 ">
      <div>
        <h3>Pay Fees</h3>
        <div className="flex gap-2 justify-end w-full">
          <select className="border-[1.3px] border-black rounded-md p-2" id="">
            <option value="">Select Time Range</option>
            <option value="">Last 1 Month</option>
            <option value="">Last 3 Month</option>
            <option value="">Last 6 Month</option>
            <option value="">Last 1 Year</option>
          </select>
          <input
            type="date"
            className="border-[1.3px] border-black rounded-md p-2"
          />
        </div>
        <main>
          {tableData.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.title}</p>
                <p>{item.label}</p>
                <p>{item.description}</p>
                <p>{item.duration}</p>
                <p style={{ backgroundColor: item.status ? "green" : "red" }}>
                  {item.status ? "Paid" : "Unpaid"}
                </p>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default PayFees;
