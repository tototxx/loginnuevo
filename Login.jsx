
import "./index.css";
import React, { useState } from "react";


export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
   



  return (
    <div className="Container">
       
      <h2>¡Bienvenidos!</h2>
      <img src="/logodiosse.png" className="App-logo" alt="Logo" /> {/* Agrega el logotipo */}
      <br />
      <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="email-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ejemplo@email.com"
          id="email"
          name="email"
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <br />
        <br />
        <button className="btn-ingresar" type="submit">Ingresar</button>
      </form>
      <br />
      <br />

      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        ¿No tienes una cuenta? Registrate
      </button>
    </div>
  );
};



  