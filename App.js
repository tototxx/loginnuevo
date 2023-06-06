//import logo from './logo.svg';
import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";



function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <h1>Diosse</h1>
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
     
    </div>
  );
}

export default App;






