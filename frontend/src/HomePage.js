import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Импортируйте CSS для стилизации

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Добро пожаловать в систему учёта рабочего времени</h1>
      <p>Эта платформа создана для того, чтобы помочь вам эффективно управлять и отслеживать ваше рабочее время.</p>
      <div className="buttons-container">
        <Link to="/employee-dashboard" className="access-button">Доступ для сотрудников</Link>
        <Link to="/manager-dashboard" className="access-button">Доступ для руководителей</Link>
      </div>
    </div>
  );
};

export default HomePage;
