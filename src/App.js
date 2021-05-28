import React ,{ useState } from 'react';
import Form from './components/form'
import TotalContainer from './components/totalcontainer'

function App(){
  const [cantidad,setCantidad] = useState('');
  const [plazo,setPlazo] = useState('');
  const [total,setTotal] =useState(0)

 const guardarCantidad = (e) => {
   setCantidad(parseInt(e.target.value))
 }
 const guardarPlazo = (e) => {
  setPlazo(parseInt(e.target.value))
 }
  return (
    <React.Fragment>
      <Form
      cantidad={cantidad}
      guardarCantidad={guardarCantidad}
      plazo={plazo}
      guardarPlazo={guardarPlazo}
      setTotal={setTotal}
      >
      </Form>
      
      { cantidad>0 && plazo>=3 && total >0?
       <TotalContainer 
      total={total}
      plazo={plazo}
      cantidad={cantidad}
      ></TotalContainer>: ''}
     
    </React.Fragment>
  )
}

export default App
