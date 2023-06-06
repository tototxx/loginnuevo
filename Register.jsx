import React,{useState} from "react";
import "./index.css";
export const Register = (props) => {
    const[email, setemail] = useState('');
    const[pass, setpass] = useState('');
    const[name, setname] = useState ('');
    const[Dni, setDni] = useState ('');
     const handlesubmit = (e) => {
        e.preventdefault();
        console.log(email)


    }

    return(
        
          <div className = "auth-form-container">
            <h2>¡Registrate!</h2>
            <br />
            <br />
        <form className="register-form" onSubmit={handlesubmit}>
        <label htmlFor="name" className="name-label">Nombre completo</label>
        <input value={name} onChange={(e) => setname(e.target.value)} type="name"  id="name" placeholder="Nombre Completo" name="name" autoComplete="off"/>

            <br />    
            <br />
            <label htmlFor="Dni" className="dni-label">DNI</label>
            <input value={Dni} onChange={(e) => setDni(e.target.value)} type="Dni"  id="Dni" placeholder="Ingrese su dni" name="Dni" autoComplete="off"/>

            <br />
            <br />
            <label htmlfor="email"> email</label>
            <input value = {email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="ejemplo@email.com" id="email" name="email" autocomplete="off"/> 
            <br />
            <br />
            <label htmlfor="password"> Contraseña</label>

            <input value = {pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> 
            <br />
             <br />
            <button type="submit">Ingresar</button> 
            <br />
            <br />
        </form>
        <button className = "link-btn" onClick={() => props.onFormSwitch('Login')}> Ya tienes una cuenta? Ingresa aqui</button> 
        </div>    
    )
}