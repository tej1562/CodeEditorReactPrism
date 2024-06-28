import React from 'react';
import { languages } from '../../utils/constants';
import Select from "react-select";
import "./styles.css";

function LanguageChoice({ setLanguage }) {
  const languageOptions = languages.map((lang) => {
    return {
      value: lang,
      label: lang
    }
  });

  return (
    <Select
      className='language-input'
      defaultValue={languageOptions[0]}
      options={languageOptions}
      onChange={(e) => setLanguage(e.value)}
    />
  )
}

export default LanguageChoice;
