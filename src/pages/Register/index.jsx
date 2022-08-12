import React from "react";
import {Container} from "../../styles/container";
import Typography from "../../styles/typography";
import FormSubmit from "../../components/Form/FormRegister";
import { Redirect } from "react-router-dom";

const Register = ( {authenticated}) => {

  if(authenticated){
    return <Redirect to="/home"/>
  }

  return (
    <Container mt="200px">      
      <Typography font="logo" color="colorPrimary">
        Kenzie Hub
      </Typography>
      <FormSubmit/>
    </Container>
  )
};

export default Register;