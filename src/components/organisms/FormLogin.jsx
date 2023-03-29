import { Link,redirect, useNavigate } from "react-router-dom"; 
import Image from "../atoms/Imagen";
import Title from "../atoms/Title";
import { useState } from "react";
import WrapperInput from "../moleculs/WrapperInput";
import Button from "../atoms/Button";
import { useRef } from "react";
import "../../assets/Styles/FormLogin.css";

const FormLogin = () => {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = "http://34.225.239.102/api/iniciar";

  const handlerClick = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
      alert("campos vacios");
    }else{
      
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: newForm.get("usuario"),
        contrasenia: newForm.get("contrasenia"),
      }),
    };

    fetch(endPoint, options)
      .then((response) => response.json())

      .then((data) => {
        if(data.status === true){
          navigate("/busRegister");
        }else{
          alert("Datos incorrectos")
        }
      });
    }
  };

  return (
    <div className="container_PL">
        <div className="container_FormLogin"> 
        <Image />
            <form ref={Form}>
            <Title>Bienvenido</Title>
        
            <WrapperInput
            msn="Usuario"
            type="text"
            parametro={"user"}
            placeholder="Write User" 
            className="inputTxt"/>

            <WrapperInput
            msn="Contraseña"
            type="password"
            parametro={"contrasenia"}
            placeholder="Write Password"
            className="inputTxt"/>

          </form>

          <div className="login">
            <Button
            msj="Log in"
            onClick={handlerClick} />
            </div>

          <h4>You do not have an account? Be encouraged to create it</h4>
          <Link to="/Register">Create Account</Link>
        </div>
        </div>
  );
}

export default FormLogin;