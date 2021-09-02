import React from 'react';
import './FormPersonDetails.css';

const FormPersonDetails = (props) => {

  const { label, placeholder, type, focusForm,
    onInputPersonDetails, inputName, onFocus,
    checkValid } = props;

  return (
    <div className='personDetails-wrapper'>
      <label>
        {label}<br />
        <input
          onChange={onInputPersonDetails}
          onFocus={onFocus}
          placeholder={placeholder}
          type={type}
          name={inputName}
        />
      </label>
      {
        ((inputName === focusForm) && !checkValid) &&
        (<span>Введено не корректное значение</span>)

      }
    </div>
  )
}

export default FormPersonDetails;