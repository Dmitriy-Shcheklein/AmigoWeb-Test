import React from 'react';
import './FormHeading.css';

const FormHeading = () => {
  return (
    <div className="heading-wrapper">
      <h1>Регистрация</h1>
      <p>Уже есть аккаунт?
        <a href='/'>&nbsp;Войти</a>
      </p>
    </div>
  )
}

export default FormHeading;
