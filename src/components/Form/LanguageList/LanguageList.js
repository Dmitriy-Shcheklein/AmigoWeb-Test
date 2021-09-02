import React from 'react';
import './LanguageList.css';

const LanguageList = (props) => {

  const { language, onChooseLanguage } = props;

  return (
    <div className='languageList-wrapper'>
      <ul>
        {
          language.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => onChooseLanguage(idx)}
              >{item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default LanguageList;
