import Image from "../atoms/Imagen";
import "../../assets/Styles/FormRegister.css";
import Label from "../atoms/Label";
import Title from "../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WrapperInput from "../moleculs/WrapperInput";
import Button from "../atoms/Button";
import React, {useRef} from "react";

const FormRegister = () => {
    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = 'http://34.225.239.102/api/registrar/usuario'
  
  
  
    const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
  
      if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){//el simbolo de pesos despues se nombra la variable
          alert("campos vacios");
      }else{
          
      const options = {
  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: newForm.get("nombre"),
          usuario: newForm.get("usuario"),
          correo: newForm.get("correo"),
          contrasenia: newForm.get("contrasenia"),
        }),
      };
      fetch(endPoint, options)
        .then((response) => response.json())
        .then((data) => {
          alert(JSON.stringify(data));
          if(data.status === true){
              navigate("/");
            }else{
              alert("No se agrego")
            }
        });
      }
    };
  
    return ( 
        <div className="container_PR">
        <div className="container_FormRegister"> 
            <Image />
              <form ref={Form}>
              <Title>Registrate Aqui!</Title>
          
              <WrapperInput
              msn="Name"
              type="text"
              parametro={"nombre"}
              placeholder="Write Name" 
              className="inputTxt"/>

              <WrapperInput
              msn="E-mail"
              type="email"
              parametro={"correo"}
              placeholder="Write Password"
              className="inputTxt"/>

              <WrapperInput
              msn="Username"
              type="text"
              parametro={"usuario"}
              placeholder="Write Username" 
              className="inputTxt"/>

              <WrapperInput
              msn="Password"
              type="password"
              parametro={"contrasenia"}
              placeholder="Write Password"
              className="inputTxt"/>

              <Button
              msj="Register"
              onClick={handlerClick} />
          </form>
        </div>
    </div>
    );
  }
  
  export default FormRegister;