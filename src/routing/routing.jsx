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
      </Routes>
    </Router>
  );
};
export default Routing;
