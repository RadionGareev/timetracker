import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeDashboard.css'; // Подключаем CSS для стилизации

const EmployeeDashboard = () => {
  return (
    <div className="employee-dashboard">
      <h1>Добро пожаловать, сотрудник</h1>
      <p>Выберите один из следующих вариантов для начала работы:</p>
      <div className="employee-buttons">
        <Link to="/login" className="dashboard-button">Login�</Link>
        <Link to="/register" className="dashboard-button">Регистрация</Link>
        <Link to="/demo" className="dashboard-button">Демо</Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
