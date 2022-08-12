import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Routes
        loading={loading}
      />
    </>
  );
}

export default App;


/*

  => Icone deletar no componente Card e logica para deletar;

  => Modal com funções de atualização e deletar;

  => 

*/