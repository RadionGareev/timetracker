import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EmployeeDashboard from './EmployeeDashboard';
import ManagerDashboard from './ManagerDashboard';
import AdminDashboard from './AdminDashboard';
import SuperAdminDashboard from './SuperAdminDashboard';
// Убедитесь, что следующие компоненты импортированы, если они существуют
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import DemoComponent from './DemoComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
        {/* Убедитесь, что компоненты для логина, регистрации и демо доступа существуют */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/demo" element={<DemoComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
