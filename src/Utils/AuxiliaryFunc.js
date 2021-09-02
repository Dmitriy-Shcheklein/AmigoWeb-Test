const checkAllСonditions = (name, email, numberPhone, checkName,
  checkPhone, checkEmail, checkbox, selectedLang) => {
  let personDataStatus = !(name === '' || email === '' ||
    numberPhone === '')
  let formStatus = (checkName && checkPhone && checkEmail &&
    checkbox && (selectedLang !== 'Язык'));
  let buttonStatus = !(personDataStatus && formStatus);
  return buttonStatus;
}

export {
  checkAllСonditions,
}



