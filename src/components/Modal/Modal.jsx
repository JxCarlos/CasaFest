import React, { useState, useContext } from "react"
import { Button } from "../../commons/components"
import { ButtonType } from "../../utils/constants"
import { ContainerModal, FormQuote, BodyModal, HeaderQuote } from "./modal.styled"
import phoneImg from '../../assets/images/telefono.png'


//context
import { AmariloContext } from '../../context';

export const Modal = ({ handleOnClick }) => {
  const { projectSelected } = useContext(AmariloContext);
  const [dataUser, setDataUser] = useState({});

  const handleChange = (e, property) => {
    dataUser[property] = e.target.value;
    setDataUser(dataUser);
  }

  const saveData = () => {
    const information = localStorage.getItem("information");
    if(information) {
      localStorage.removeItem('information')
    }
    const data = {
      ...dataUser,
      project: projectSelected.name
    }
    localStorage.setItem("information", JSON.stringify(data));
    
  }

  return (
    <ContainerModal>
      <BodyModal>
        <span className="x" onClick={() => handleOnClick()}></span>
        <HeaderQuote>
          <p className="marign-0 quote-p">COMPLETA YA ESTE FORMULARIO PARA SOLICITAR INFORMACIÓN DEL <span className="font-light">INMUEBLE DE TUS SUEÑOS.</span></p>
          <div className="quote-phone"><img src={phoneImg} width="18.84" height="18.84" alt="phone" />601 6340000</div>
        </HeaderQuote>
        <FormQuote>
          <label>
            Nombre completo
            <input value={dataUser.userName} onChange={(e) => handleChange(e, 'userName')}/>
          </label>
          <label>
            Teléfono
            <input value={dataUser.phone} onChange={(e) => handleChange(e, 'phone')}/>
          </label>
          <label>
            Email
            <input value={dataUser.email} onChange={(e) => handleChange(e, 'email')}/>
          </label>
          <label>
            ¿Cómo te enteraste de Casa Fest?
            <select />
          </label>
          <label>
            Ingresos familiares
            <select />
          </label>
          <Button type={ButtonType.CARD} handleOnClick={() => saveData()}>SOLICITAR</Button>
        </FormQuote>
      </BodyModal>
    </ContainerModal>
  )
}
