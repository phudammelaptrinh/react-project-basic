import React, { useState } from 'react';
import validator from 'validator';

const App = () => {

  const [errMessage, setErrMessage] = useState("");
  const validate = (value) => {

    if(validator.isStrongPassword(value,{
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    }))

    {
      setErrMessage("Password is strong");
    }

    else{
      setErrMessage("Password is weak");
    }
  };

  return (
    
    <div style={{marginLeft:'200px'}}>
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <spnan>Enter Password : </spnan>
        <input type="text" onChange={(e)=> validate(e.target.value)}  />
        {errMessage === ' ' ? null :
          <span style = {{fontWeight:'bold', color:'red'}}>{errMessage}</span>
        }
      </pre>
    </div>

  );


}

export default App;

