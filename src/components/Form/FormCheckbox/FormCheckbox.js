import React from 'react';
import './FormCheckbox.css';

const FormCheckbox = (props) => {

  const { onToggleCheckbox } = props;

  return (
    <label className='checkbox-wrapper'>
      <input
        onClick={onToggleCheckbox}
        type='checkbox'></input>
      <span>
        Принимаю<a className='title__link'
          href='/'>&nbsp;условия&nbsp;</a>
        использования
      </span>
    </label>
  )
}

export default FormCheckbox;