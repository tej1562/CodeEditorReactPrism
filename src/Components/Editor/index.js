import React, { useState } from 'react'
import { Highlight, themes } from "prism-react-renderer";
import LanguageChoice from '../LanguageChoice';
import "./styles.css";

function Editor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("jsx");

  return (
    <div className='wrapper'>
      <h1 className='title'>Tealfeed Assignment - Code Editor</h1>

      <LanguageChoice setLanguage={setLanguage} />

      <div className='editor'>
        <textarea
          autoCorrect={false}
          spellCheck={false}
          className='editor-input editor-overlay'
          placeholder='Enter code here...'
          value={code}
          onChange={(e) => setCode(e.target.value)} />

        <Highlight
          theme={themes.oneLight}
          code={code}
          language={language}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className='editor-overlay' style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default Editor