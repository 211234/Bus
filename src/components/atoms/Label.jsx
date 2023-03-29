import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'Mandali';
`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
    );
}


export default Label;