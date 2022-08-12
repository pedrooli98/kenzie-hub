import React from "react";
import Typography from "../../../styles/typography";
import { SubmitButton, Button } from "../../Button";
import { SelectExperience } from "../../Select";
import { useForm } from "react-hook-form";
import { ModalTheme } from "../style";
import {yupResolver} from '@hookform/resolvers/yup' 
import * as yup from "yup"
import { useState } from "react";
import api from "../../../services/api";
import { toast } from "react-toastify";

export const UpdateModal = ({setModalUpdte, tech, token, selectValue, setSelectValue}) =>{

  const[select, setSelect] = useState(tech?.status)

  const formSchema = yup.object().shape({
    status:yup 
          .string()
          .required("")
  })
  
  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(formSchema)
  })

  const deleteTech = () => {
    const techId = tech?.id;
    api.delete(`users/techs/${techId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>{toast.success("Tecnologia deletada !!!")
    setModalUpdte("none")
  })
    .catch((err)=>toast.error("Algo deu errado :( "))

  }

  const onSubmitFunction = (data) => {
    api.put(`users/techs/${tech?.id}`, data, {
      headers: {
        Authorization:`Bearer ${token}`
      }
    })
    .then((res)=>{
      toast.success("Tecnologia atualizada")
      setModalUpdte("none")
    })
    .catch((err)=> toast.error("Algo deu errado"))
  }

  const closeModal = () => {
    setModalUpdte("none")
  }

  return (
    <ModalTheme>
      <div className="modal-header">
        <Typography font="title3">Cadastrar Tecnologia</Typography>
          <Button 
            buttonStyle="smaller"
            onClick={closeModal}
          >
            <Typography>X</Typography>
          </Button>
        </div>
        <form className="modal-inputs" onSubmit={handleSubmit(onSubmitFunction)}>
          
          <div className="modal-value"><Typography>{tech?.title}</Typography></div>

          <div className="modal-value">
              <select 
              value={select}
              onChange={(e)=>setSelect(e.target.value)}
              {...register("status")}
          >
            <option option value="iniciante">Iniciante</option>
            <option option value="intermediario">Intermediario</option>
            <option option value="avançado">Avançado</option>
          </select>

          </div>
        
        <div className="modal-buttons">
          <SubmitButton buttonStyle="mid"><Typography font="title3">Salvar alterações</Typography></SubmitButton>

          <Button
            onClick={deleteTech}
          ><Typography font="title3">Excluir</Typography></Button>
        </div>

        </form>
      </ModalTheme>
  )
}