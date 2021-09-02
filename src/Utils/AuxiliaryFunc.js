const checkAllСonditions = (name, email, numberPhone, checkName,
  checkPhone, checkEmail, checkbox, selectedLang) => {
  let personDataStatus = !(name === '' || email === '' ||
    numberPhone === '')
  let formStatus = (checkName && checkPhone && checkEmail &&
    checkbox && (selectedLang !== 'Язык'));
  let buttonStatus = !(personDataStatus && formStatus);
  return buttonStatus;
}

const regName = /^[a-zа-я\p{L} -]+$/i;
const regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
const regPhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

const validData = (data, regExp) => {
  let valid = true;
  if (data === '') return valid;
  valid = regExp.test(data);
  return valid;
}

export {
  checkAllСonditions,
  validData,
  regMail,
  regName,
  regPhone
}