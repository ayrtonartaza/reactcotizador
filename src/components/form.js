import React,{useState} from 'react';
import styled from 'styled-components'
import Error from './error'
import {calcularTotal} from '../helpers'

const StyledForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
    font-family: 'Nunito', sans-serif;
    border:1px rgba(0,0,0,.1) solid;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    border-radius: 6px;
    padding:20px 20px;
    flex-flow:column;
    width: 95%;
    margin: 20px auto;
    @media screen and (min-width:600px){
        width: 600px;
    }
    @media screen and (min-width:1000px){
        width: 700px;
    }
`
const StyledButton =styled.button`
    -webkit-font-smoothing: antialiased;
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
    font-family: 'Nunito', sans-serif;
    background-color:  #1400FF;
    border: none;
    border-radius: 12px;
    color: #fafafa;
    font-weight: bold;
    font-size: 17px;
    padding: 12px 56px;
    margin-top: 20px;
`
const StyledFormGroup = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-top: 16px;
`
const StyledLabel = styled.label`
    -webkit-font-smoothing: antialiased;
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: gray;
    margin-bottom: 4px;
`
const StyledInput = styled.input`
    width:95%;
    height: 36px;
`
const StyledSelect = styled.select`
    width:96%;
    height: 40px;
`
const Form = (props) => {
    const [error,guardarError] = useState(false);
    const [mensaje,setMensaje] = useState('')
    const calcularPrestamo = (e) => {
        e.preventDefault();
        if(props.plazo === ''|| isNaN(props.plazo)){
            guardarError(true)
            setMensaje('Todos los campos son obligatorios')
            console.log(props.cantidad)
            console.log(props.plazo)
            return false;
        }
        else if(isNaN(props.cantidad) || props.cantidad <= 0){
            guardarError(true)
            setMensaje('Agrega una cantidad valida')
            console.log(props.cantidad)
            console.log(props.plazo)
            return false;
        }
        console.log(props.cantidad)
        console.log(props.plazo)
        guardarError(false)
        setMensaje('')
        
        /* definir total */
        const totalHelper =calcularTotal(props.cantidad, props.plazo)
        /* aca el valor retornao por la funcions de helpers y lo sete en setTotal 
        que cambiara el total del setState en App.js (por eso el props)  */
        props.setTotal(totalHelper);
    }
    return (  
       
        <React.Fragment>
        <StyledForm onSubmit={calcularPrestamo} id='formhtml'>
          <div>
              <h4>Calcular cotización</h4>
              <StyledFormGroup>
                  <StyledLabel>Cantidad Prestamo</StyledLabel>
                  <StyledInput 
                      className="u-full-width" 
                      placeholder="Ejemplo: 3000"
                      onChange={props.guardarCantidad}
                  />
              </StyledFormGroup>
              <StyledFormGroup>
                  <StyledLabel>Plazo para Pagar</StyledLabel>
                  <StyledSelect 
                     onChange={props.guardarPlazo}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </StyledSelect>
              </StyledFormGroup>
              
                <StyledButton type='submit'>Calcular</StyledButton>
             
          </div>
          {(error)? <Error mensaje={mensaje}></Error> : ''}
          
        </StyledForm>
       
        </React.Fragment>
        
    );
}
 
export default Form;