import React from 'react';

const RegisterComponent = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <form>
        <input type="text" placeholder="Имя пользователя" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterComponent;

