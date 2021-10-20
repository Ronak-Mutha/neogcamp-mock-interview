//React 


import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  const [text, setText] = useState('');
  const [font, setFont] = useState(16);

  return (
    <div className="App">
      <input onChange = {e => setText(e.target.value)} />
      <button onClick = {() =>setFont(font + 2)} > + </button>
      <button onClick = {() => setFont(font - 2)} > - </button>
      <div style = {{fontSize : `${font}px`}}>{text}</div>
    </div>
  );
}
