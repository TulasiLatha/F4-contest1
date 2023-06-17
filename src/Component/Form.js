import React, {useState} from "react";

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const errors = [];

    // Validate form fields
    if (!email) {
      errors.push('Email is required');
    }
    if (!name) {
      errors.push('Name is required');
    }
    if (!password) {
      errors.push('Password is required');
    }
    if (password !== confirmPassword) {
      errors.push('Passwords do not match');
    }
     if(errors.length >0){
        setErrors(errors);
        setSuccessMessage('');
     }else{
      setErrors([]);
      setSuccessMessage('Signup successfully');
     }
    // Display errors if any
   
  }

  return (
    <form onSubmit={handleSubmit}>
        {/* {errors.map((error,index)=>(
            <div key={index}>{error}</div>
        ))}
        {successMessage && <div>{successMessage}

      </div>} */}
      <h1>SIGNUP FORM</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <button type="submit">Signup</button>

      
      {errors.map((error,index)=>(
            <div key={index}>{error}</div>
        ))}
        {successMessage && <div>{successMessage}
      </div>}
      
    </form>
  );
}

export default Form;