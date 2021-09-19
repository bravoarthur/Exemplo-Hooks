import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({aoEnviar}) {

    const [etapaAtual, setEtapaAtual] = useState(0)

    const [dadosColetados, setDadosColetados] = useState({})

    const formulario = [<DadosUsuario aoEnviar={coletarDados}/>, <DadosPessoais aoEnviar={coletarDados} />,<DadosEntrega aoEnviar={coletarDados}/>, <Typography variant='h5'>Obirgado por se Cadastrar</Typography>]

    useEffect(()=> {

        if(etapaAtual === formulario.length-1){
       aoEnviar(dadosColetados)}

    })
    //useEffect pede para executar uma funcao sempre que o componente renderizar. o segundo parametro pode ser uma Array que contem as variaveis q ativam esse hook ou vazio [] caso queira q a funcao seja executada apenas uma vez quando o componente e inserido na tela.


    function coletarDados(dados) {

        setDadosColetados({...dadosColetados, ...dados})
       
        proximo()

    }


    function proximo(){
        setEtapaAtual(etapaAtual+1)
    }




    return (

        <>

          
           <Stepper activeStep={etapaAtual}>
               <Step><StepLabel>Login</StepLabel></Step>
               <Step><StepLabel>Dados Pessoais</StepLabel></Step>
               <Step><StepLabel>Endereco</StepLabel></Step>
               <Step><StepLabel>Finalizacao</StepLabel></Step>
           </Stepper>

           {formulario[etapaAtual]}
                       

        </>


    )
}



export default FormularioCadastro;