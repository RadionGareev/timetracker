import React from 'react';

const ManagerDashboard = () => {
  return (
    <div>
      <h1>Панель управления для руководителей</h1>
      <p>Здесь вы можете управлять задачами вашей команды, просматривать отчеты и анализировать продуктивность.</p>
      <div>
        <button>Просмотреть задачи</button>
        <button>Создать отчет</button>
        <button>Анализ продуктивности</button>
      </div>
    </div>
  );
};

export default ManagerDashboard;
