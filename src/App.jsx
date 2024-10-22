import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";

//Owner Dashboard
import OwnerDashboard from "./pages/Dashboard";
import LeasingUpdates from "./pages/LeasingUpdates";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root path redirect */}
        <Route path="/" element={<Navigate to="/owner-dashboard" replace />} />

        <Route element={<MainLayout />}>
          <Route path="owner-dashboard" element={<OwnerDashboard />} />
          <Route path="leasing-updates" element={<LeasingUpdates/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
