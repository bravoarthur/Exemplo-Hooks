import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
    /* para receber as props eu posso colocar FormularioCadastro(props) e depois fazer props.funcaoqueeuquero. Do modo atual eu desconstruo o objeto props para chamar a funcao diretamente
    
    */

    const [nome, setNome] = useState("");
    /*
    E o mesmo que
    const teste = useState("dados")
    const nome = teste[0]
    const setNome = teste[1]
    */
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);
    //como Usar o USECONTEXT

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            className=""
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}
        >
            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={nome}
                name="nome"
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText="O Nome deve estar Correto"
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={sobrenome}
                name="sobrenome"
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cpf}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                name="cpf"
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
            />

            <FormControlLabel
                label="Promocoes"
                control={
                    <Switch
                        color="primary"
                        name="promocoes"
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        color="primary"
                        name="novidades"
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                    />
                }
            />

            <Button type="submit" color="primary" variant="contained">
                Proximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
