import React from "react"
import { ContainerHome } from "../../styles/container"
import Typography from "../../styles/typography"

const Bio = ({name, bio}) => {
  return (
    <ContainerHome size="section">
      <div>
        <Typography font="title2">{name}</Typography>
        <p><Typography color="grey">{bio}</Typography></p>
      </div>
    </ContainerHome>
  )
}

export default Bio;