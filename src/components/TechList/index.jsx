import React from "react";
import { ContainerHome, Container } from "../../styles/container";
import Typography from "../../styles/typography";
import {Button} from "../Button/index"
import ThemeList from "./styles";
import TechCard from "./TechCard";
import api from "../../services/api";
import { toast } from "react-toastify";

const TechList = ({setModalRegister, setModalUpdte, techs, handleModalUpdate, setSelectedTech}) => {

  const token = localStorage.getItem("@Kenziehub:token")

  const deleteCard = (e) => {
    const techId = e.target.id;
    api.delete(`users/techs/${techId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res)=>toast.success("Tecnologia deletada !!!"))
    .catch((err)=>toast.error("Algo deu errado :( "))
  }

  const openRegisterModal = () =>{
    setModalRegister("flex")
  }


  return (
    <>
    <ContainerHome>
      <div>
        <Typography font="title3">Tecnologias</Typography>
        <Button buttonStyle="smaller" onClick={openRegisterModal}>
          <Typography font="title3">+</Typography>
        </Button>
      </div>
    </ContainerHome>

    <Container>
      <ThemeList>
        {techs.map((tech,index)=>{
          return (
            <TechCard
              key={index}
              tech={tech.title}
              status={tech.status}
              id={tech.id}
              onClick={deleteCard}
              handleModalUpdate={handleModalUpdate}
            />
          )
        })}

      </ThemeList>
    </Container>
    </>
  )
}

export default TechList

/*           <TechCard
            tech="Next Js"
            status="Avançado"
            onClick={openUpdateModal}
          />
          
          */