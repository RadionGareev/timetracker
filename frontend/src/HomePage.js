import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в систему учёта рабочего времени</h1>
      <p>Эта платформа создана для того, чтобы помочь вам эффективно управлять и отслеживать ваше рабочее время.</p>
      <div>
        <Link to="/employee-dashboard" className="button">Доступ для сотрудников</Link>
        <Link to="/manager-dashboard" className="button">Доступ для руководителей</Link>
      </div>
    </div>
  );
};

export default HomePage;
