import React from "react";
import Typography from "../../styles/typography";
import InputTheme from "./styles";


const Input = ({label, type, register, name, errors}) => {
  return(
    <InputTheme isErrored={!!errors}>
    <Typography>
      {label}{!!errors && <span> - {errors}</span>}
    </Typography>
      <div>
        <input type={type} {...register(name)}/>
      </div>
    </InputTheme>
  )
}

export default Input