import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "../pages/layout/layout";
import Dasboard from "../pages/dashboard/dasboard";
import Login from "../pages/auth/login";
import StudentDashboard from "@/pages/student-dashboard/studentDashboard";
import PayFees from "@/pages/student-dashboard/pay-fees/payFees";

const Routing = () => {
  const accountType = localStorage.getItem("type");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Navigate to="login" />} />
        {accountType == "institute" ? (
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dasboard />} />
          </Route>
        ) : (
          <Route path="/dashboard" element={<StudentDashboard />} />
        )}
        <Route path="/add-student" element={<PayFees />} />
        <Route path="/pay-fees" element={<PayFees />} />
        <Route path="/help" element={<PayFees />} />
      </Routes>
    </Router>
  );
};
export default Routing;
