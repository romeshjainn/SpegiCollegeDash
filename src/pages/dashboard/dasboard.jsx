import { useState } from "react";
import { Card } from "./comp/card";

const Dashboard = () => {
  const [cardData, setCardData] = useState([
    {
      label: "Enquiries",
      value: "12",
      bgColor: "red",
    },
    {
      label: "Admissions",
      value: "12",
      bgColor: "blue",
    },
    {
      label: "Income",
      value: "12",
      bgColor: "purple",
    },
    {
      label: "Expense",
      value: "12",
      bgColor: "green",
    },
  ]);
  return (
    <div className="py-8 px-8 h-screen">
      <h2 className="font-medium">Dashboard</h2>
      <div className="flex justify-between gap-2 mt-10 ">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              label={item.label}
              value={item.value}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
