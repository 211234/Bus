import styled from 'styled-components';

const StyledInput = styled.input`
 display: flex;
  border: none;
  border-bottom: 2px  solid #FF7F32;
  width: 280px;
  height: 35px;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-left: 20px;
  font-size: 1.1rem;
`;

function Input({type, placeholder, className}){
    return(
        <StyledInput type={type} placeholder={placeholder} className={className}/>
    )
}

export default Input;
