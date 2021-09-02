import React from 'react';
import { useState, useEffect } from 'react';
import {
  checkAllСonditions, validData,
  regMail, regName, regPhone
} from '../../Utils/AuxiliaryFunc';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import FormLanguage from './FormLanguage';
import FormPersonDetails from './FormPersonDetails';
import FormHeading from './FormHeading';

import './Form.css';

const Form = () => {

  const language = [
    'Русский', 'Английский', 'Китайский', 'Испанский',
  ];

  const [checkbox, setCheckbox] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Язык');
  const [openList, setOpenList] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [focusForm, setFocusForm] = useState();
  const [buttonStatus, setButtonStatus] = useState(false);

  const onInputPersonDetails = (e, focusForm) => {

    switch (focusForm) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setNumberPhone(e.target.value);
        break
      default:
        break
    }
  }

  const onFocus = (e) => {
    let inputName = e.target.getAttribute('name');
    setFocusForm(inputName);

  }

  const onToggleCheckbox = () => {
    setCheckbox(!checkbox);
  }

  const onOpenList = () => {
    setOpenList(!openList)
  }

  const onChooseLanguage = (idx) => {
    setSelectedLang(language[idx]);
    setOpenList(!openList);
  }

  const checkName = validData(name, regName);
  const checkEmail = validData(email, regMail);
  const checkPhone = validData(numberPhone, regPhone);

  let btnStatus = checkAllСonditions(name, email, numberPhone,
    checkName, checkPhone, checkEmail, checkbox, selectedLang);

  useEffect(() => {
    setButtonStatus(btnStatus)
  }, [btnStatus])

  const handleSubmit = (e) => {
    alert(`Отправленные данные:
    имя: ${name},
    email: ${email},
    номер телефона: ${numberPhone},
    выбранный язык: ${selectedLang},
    приняты условия соглашения: ${checkbox}`);
  }

  return (
    <div className='container'>
      <form className="form" onSubmit={handleSubmit}>
        <FormHeading />
        <FormPersonDetails
          label={'Имя'}
          placeholder={'Введите Ваше имя'}
          type={'text'}
          focusForm={focusForm}
          checkValid={checkName}
          inputName={'name'}
          onFocus={(e) => onFocus(e)}
          onInputPersonDetails={(e) => onInputPersonDetails(e, focusForm)}
        />
        <FormPersonDetails
          label={'Email'}
          placeholder={'Введите ваш email'}
          type={'email'}
          inputName={'email'}
          focusForm={focusForm}
          checkValid={checkEmail}
          onFocus={(e) => onFocus(e)}
          onInputPersonDetails={(e) => onInputPersonDetails(e, focusForm)}
        />
        <FormPersonDetails
          label={'Номер телефона'}
          placeholder={'Введите номер телефона'}
          type={'tel'}
          focusForm={focusForm}
          checkValid={checkPhone}
          inputName={'phone'}
          onFocus={(e) => onFocus(e)}
          onInputPersonDetails={(e) => onInputPersonDetails(e, focusForm)}
        />
        <FormLanguage
          selectedLang={selectedLang}
          language={language}
          openList={openList}
          onOpenList={onOpenList}
          onChooseLanguage={onChooseLanguage}
        />
        <FormCheckbox
          onToggleCheckbox={onToggleCheckbox}
        />
        <FormButton
          buttonStatus={buttonStatus}
        />
      </form>
    </div>
  )
}

export default Form;