import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function BootStrap() {
  const [disable,setDisable]= useState<boolean>(false)
  const func2 = ()=> setDisable(ele => !ele);
  const primaryVariant = 'primary'
  const secondaryVariant = 'secondary'
  let history = useHistory();
  const func = () => history.push("/tekitou")
  return (
    <>
    <Button variant={primaryVariant} onClick={()=>func2()}>{primaryVariant}</Button>
    <Button variant={secondaryVariant} disabled={disable}>{secondaryVariant}</Button>
    <Button variant="success" disabled={disable}>Success</Button>
    <Button variant="warning">Warning</Button>
    </>
  );
}

export default BootStrap;
