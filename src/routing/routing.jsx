import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "../pages/layout/layout";
import Dasboard from "../pages/dashboard/dasboard";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="/dashboard" element={<Dasboard />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Routing;
