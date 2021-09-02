import React from 'react';
import './FormLanguage.css';
import Arrow from '../../../img/Arrow.png'
import LanguageList from '../LanguageList';

const FormLanguage = (props) => {

  const { language, selectedLang, onOpenList, openList,
    onChooseLanguage } = props;

  return (
    <div className='language-wrapper'>
      <span>Язык</span>
      <div className={`input ${openList && 'input-focus'}`}>
        <span className={`${selectedLang !== 'Язык' && 'languageChoosing'}`}>
          {selectedLang}</span>
        <button
          onClick={onOpenList}
          type='button'
        >
          <img src={Arrow} alt='language selection' />
        </button>
      </div>
      {
        openList && <LanguageList
          language={language}
          onChooseLanguage={onChooseLanguage}
        />
      }
    </div >
  )
}

export default FormLanguage;