import React, { useState } from 'react';

function TextBoxRead() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');

 // this is arrow function for button click event
 // variable in react function component using a
 // sector method
 const handleClick = () => {
    setOutput(`You entered: ${input}`);
    
  };
//return a single js component
  return (
    <>
      <h3>Reading from Text Box</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Click here to see Input</button>
      <p>{output}</p>
    </>
  );
}
export default TextBoxRead;