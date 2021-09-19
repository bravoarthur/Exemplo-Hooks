import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import "@fontsource/roboto"
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import {Container, Typography} from "@material-ui/core"
import {validarSenha, validarCPF} from "./models/cadastro"




class App extends Component {

  

  render() {

    return (

      <Container component="article" maxWidth="sm">

            <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>



            <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha, nome:validarSenha}}>

                 <FormularioCadastro aoEnviar={aoEnviarFormulario}/>


            </ValidacoesCadastro.Provider>





      </Container>

    );
  }
}

function aoEnviarFormulario(dados){

  console.log(dados)

}




export default App;
