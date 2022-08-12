import React from "react";
import SelectTheme from "./style";
import Typography from "../../styles/typography";
import { useState } from "react";

export const SelectModule = ({label, register, name, errors}) => {

  const [select, setSelect] = useState("M1")

  return (
    <SelectTheme isErrored={!!errors}>
      <Typography>
      {label}{!!errors && <span>- {errors}</span>}
      </Typography>
      <div>
        <select name="modulos"  value={select} {...register(name)} onChange={(e)=>setSelect(e.target.value)}>
          <option value="Primeiro Modulo (intruducao front)">M1</option>
          <option value="M2">M2</option>
          <option value="M3">M3</option>
          <option value="M4">M4</option>
          <option value="M5">M5</option>
          <option value="M6">M6</option>
        </select>
      </div>
    </SelectTheme>
  )
}

export const SelectExperience = ({label,register, name, errors}) => {

  const [selectModal, setSelectModal] = useState("iniciante")

  return (
    <SelectTheme isErrored={!!errors}>
      <Typography>
        {label}{!!errors && <span>- {errors}</span>}
      </Typography>
      <div>
        <select name="status" value={selectModal} {...register(name)} onChange={(e)=>setSelectModal(e.target.value)}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediario</option>
          <option value="avançado">Avançado</option>
        </select>
      </div>
    </SelectTheme>
  )
}


