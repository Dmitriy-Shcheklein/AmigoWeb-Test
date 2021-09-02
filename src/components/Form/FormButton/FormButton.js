import React from 'react';
import './FormButton.css';

const FormButton = (props) => {

  const { buttonStatus } = props;

  return (
    <div className='button-wrapper'>
      <input
        disabled={buttonStatus}
        type='submit'
        value='Зарегистрироваться' />
    </div>
  )
}

export default FormButton;