import React from 'react';

const LoginComponent = () => {
  return (
    <div>
      <h1>Вход в систему</h1>
      <form>
        <input type="text" placeholder="Имя пользователя" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginComponent;
