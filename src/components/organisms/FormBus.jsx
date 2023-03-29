import { Link,redirect, useNavigate } from "react-router-dom"; 
import Image from "../atoms/Imagen";
import "../../assets/Styles/FormBus.css";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import { useState } from "react";
import WrapperInput from "../moleculs/WrapperInput";
import Button from "../atoms/Button";
import { useRef } from "react";

const FormBus = () => {
    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = " http://34.225.239.102/api/autobus/register";
  
    const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
      if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){
          alert("campos vacios");
      }else{
          
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clave: newForm.get("clave"),
          placa: newForm.get("placa"),
          numasientos: newForm.get("numasientos"),
          fecha: newForm.get("fecha"),
          tipo: newForm.get("tipo"),
          nombre: newForm.get("nombre"),
          licencia: parseInt(10000 + Math.random() * 90000),
        }),
      };
  
      fetch(endPoint, options)
        .then((response) => response.json())
        .then((data) => {
        
          if(data.status === true){
              navigate("/");
            }
        });
      }
    };
  
    return (
        <div className="container_PB">
            <div className="container_FormBus"> 
            <Image />
                    <form ref={Form}>
                    <Title>Registro de Conductor</Title>
                
                    <WrapperInput
                    msn="Bus Key"
                    type="text"
                    parametro={"clave"}
                    placeholder="Write Bus Key" 
                    className="inputTxt"/>

                    <WrapperInput
                    msn="Bus Plate"
                    type="text"
                    parametro={"placa"}
                    placeholder="Write Bus Plate"
                    className="inputTxt"/>

                    <WrapperInput
                    msn="Number of seats"
                    type="text"
                    parametro={"numasientos"}
                    placeholder="Write Number of seats"
                    className="inputTxt"/>

                    <WrapperInput
                    msn="Discharge Date"
                    type="date"
                    parametro={"fecha"}
                    placeholder="Write Discharge Date"
                    className="inputTxt"/>

                    <Label msj={"Type"} />
                    <select className="input" name="tipo">
                    <option>Tourism</option>
                    <option>Luxe</option>
                    </select>

                    <WrapperInput
                    msn="Driver's Name"
                    type="text"
                    parametro={"nombre"}
                    placeholder="Write Driver's Name"
                    className="inputTxt"/>


                    <Button
                    msj="Bus Registration"
                    onClick={handlerClick} />

                </form>
            </div>
        </div>
    );
  }
  
  export default FormBus;