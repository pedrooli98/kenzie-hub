import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Routes = ({loading}) => {

  const [authenticated, setAuthenticaded] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem("@Kenziehub:token")
    if(token){
      return setAuthenticaded(true)
    }
  },[authenticated])

  return(
    <Switch>
      <Route  exact path="/">
        <Login
        loading={loading}
        authenticated={authenticated}
        setAuthenticaded={setAuthenticaded}
        />
      </Route>
      <Route   exact path={"/register"}>
        <Register
        loading={loading}
        authenticated={authenticated}
        setAuthenticaded={setAuthenticaded}
        />
      </Route>
      <Route  exact path={"/home"}>
        <Home
          loading={loading}
          authenticated={authenticated}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>
    </Switch>

  )
}

export default Routes