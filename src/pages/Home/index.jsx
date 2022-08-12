import React, { useState  } from "react";
import Bio from "../../components/Bio";
import Header from "../../components/Header";
import {RegisterModal} from "../../components/Modals";
import { ModalBackGround } from "../../components/Modals/style";
import TechList from "../../components/TechList";
import Typography from "../../styles/typography";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";
import { UpdateModal } from "../../components/Modals/ModalUpdate";
import { toast } from "react-toastify";


const Home = ({authenticated, setAuthenticated}) => {

  const [displayRegisterModal, setDisplayRegisterModal] = useState("none");
  const [selectValue, setSelectValue] = useState("iniciante")
  const [displayUpdateModal, setDisplayUpdateModal] = useState("none");
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState({});
  const [selectedTech, setSelectedTech] = useState({})

  
  useEffect(()=>{
    api.get(`/users/${userId}`)
    .then((res)=>{
      toast.success("Tecnologia Cadastrada com Sucesso !")
      setTechs(res.data.techs)
      setUser(res.data)
    })
    .catch((err)=>{
      toast.error("Algo deu Errado")
    })
  })

    const token = localStorage.getItem("@Kenziehub:token")
    const userId = localStorage.getItem("@Kenziehub:user")

  if(!authenticated){
    return <Redirect to="/"/>
  }

  const handleModalUpdate = (e) =>{
    const techId = e.target.className.slice(17)
    const selectedTech = [...techs.filter((tech)=>tech.id===techId)]
    setSelectedTech(selectedTech[0])
    setSelectValue(selectedTech[0].status)
    setDisplayUpdateModal("flex")

  }





  return (
    <main>
      <ModalBackGround
        display={displayRegisterModal}
      >
        <RegisterModal
          setRegisterModal={setDisplayRegisterModal}
          token={token}
        />
      </ModalBackGround>

      <ModalBackGround
        display={displayUpdateModal}
      >
      
        <UpdateModal 
          setModalUpdte={setDisplayUpdateModal}
          tech={selectedTech}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          token={token}
        />

      </ModalBackGround>
      <Header/>
      <Bio
        name={user.name}
        bio={user.bio}
      />
      <TechList
        setModalRegister={setDisplayRegisterModal}
        setModalUpdte={setDisplayUpdateModal}
        techs={techs}
        setSelectedTech={setSelectedTech}
        handleModalUpdate={handleModalUpdate}
      />
    </main>
  )
}
export default Home

//larissabritor@gmail.com