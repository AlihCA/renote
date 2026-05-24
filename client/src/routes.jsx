import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/public/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import RepositoriesPage from "./pages/repositories/RepositoriesPage";
import RepositoryWorkspacePage from "./pages/repositories/RepositoryWorkspacePage";
import SettingsPage from "./pages/settings/SettingsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route path="/repositories/:repoId" element={<RepositoryWorkspacePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AppRoutes;