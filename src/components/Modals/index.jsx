import React from "react";
import Typography from "../../styles/typography";
import { SubmitButton, Button } from "../Button";
import Input from "../Input";
import {SelectExperience} from "../Select";
import { ModalTheme } from "./style";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup' 
import * as yup from "yup"
import api from "../../services/api";

export const RegisterModal = ({setRegisterModal, token}) => {

  const formSchema = yup.object().shape({
    title:yup 
          .string()
          .required("Campo Obrigatorio"),
    status:yup
            .string()
            .required("Campo obrigatório"),
  })
  
  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => {
    api.post("/users/techs",data,{
      headers: {
        Authorization:`Bearer ${token}`
      }       
    })
    .then((res)=>closeModal())
    .catch((err)=> console.log(err))
  }
  
  const closeModal = () => {
    setRegisterModal("none")
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
      <Input
        label="Nome da tecnologia"
        type="text"
        errors={errors.title?.message}
        register={register}
        name="title"
      ></Input>
      <SelectExperience
        label="Selecionar status"
        name="status"
        register={register}
        errors={errors.status?.message}
      />
      <SubmitButton
        buttonStyle="big"
      ><Typography font="title3">Enviar</Typography></SubmitButton>
      </form>
    </ModalTheme>
  )
}

// export const UpdateModal = ({setModalUpdte}) =>{

//   const formSchema = yup.object().shape({
//     name:yup 
//           .string()
//           .required("Email Obrigatorio"),
//     password:yup
//             .string()
//             .required("Campo obrigatório"),
//   })
  
//   const {register, handleSubmit, formState:{errors}}=useForm({
//     resolver:yupResolver(formSchema)
//   })

//   const onSubmitFunction = (data) => console.log(data)

//   const closeModal = () => {
//     setModalUpdte("none")
//   }

//   return (
//     <ModalTheme>
//       <div className="modal-header">
//         <Typography font="title3">Cadastrar Tecnologia</Typography>
//           <Button 
//             buttonStyle="smaller"
//             onClick={closeModal}
//           >
//             <Typography>X</Typography>
//           </Button>
//         </div>
//         <form className="modal-inputs">
//         <Input
//           label="name"
//           type="text"
//           name="name"
//           register={register}
//         ></Input>
//         <SelectExperience
//           label="Selecionar status"
//         />
//         <div className="modal-buttons">
//           <SubmitButton buttonStyle="mid"><Typography font="title3">Salvar alterações</Typography></SubmitButton>

//           <SubmitButton><Typography font="title3">Excluir</Typography></SubmitButton>

//         </div>
//         </form>
//       </ModalTheme>
//   )
// }

