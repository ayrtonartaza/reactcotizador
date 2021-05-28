import React from 'react';
import styled from 'styled-components'

const StyledTotal = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    border:solid #1400FF 2px;
    border-radius: 4px;
    width: 380px;
    margin: auto;
    text-align: left;
    padding: 20px 12px 20px 20px;
    box-sizing: border-box;
    line-height: 32px;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    word-spacing: 3px;
    `
const StyledSpan = styled.span`
    line-height: 12px;
`
const TotalContainer = (props) => {
    console.log('total'+' '+props.total )
    return ( 
        <StyledTotal>
            <StyledSpan>-Por el monto de ${props.cantidad} </StyledSpan><br />
            <StyledSpan>-El total a pagar es de ${(props.total).toFixed(2)}</StyledSpan><br />
            <StyledSpan>-Deberas pagar ${(props.total / props.plazo).toFixed(2)} por mes durante {props.plazo} meses</StyledSpan>
            
        </StyledTotal>
     );
}
 
export default TotalContainer;