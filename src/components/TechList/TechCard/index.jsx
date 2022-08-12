import React from "react";
import Typography from "../../../styles/typography";
import Card from "./styles";
import {IoTrash} from "react-icons/io5"


const TechCard = ({tech, status, onClick, id, handleModalUpdate}) =>{

  

  return (
    <Card
      className={id}
      onClick={handleModalUpdate}
    >
      <Typography font="title3">{tech}</Typography>
    <div>
      <Typography >{status}</Typography>
      <IoTrash className="icon" id={id} onClick={onClick}/>
    </div>

      
    </Card>
  )
}

export default TechCard