import styled from "styled-components";

const StyledButton = styled.button`
    width: 280px;
    height: 35px;
    border-radius: 90px;
    border: none;
    background: #FF7F32;
    margin-bottom: 10px;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

const Button = ({msj}) => {
    return ( 
      <StyledButton>{msj}</StyledButton>
    );
  }
  
  export default Button;