import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }}
        >
            <TextField
                id="CEP"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
            />

            <TextField
                id="endereco"
                label="Endereco"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
            />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
            />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
            />

            <Button type="submit" color="primary" variant="contained">
                {" "}
                Finalizar Cadastro.{" "}
            </Button>
        </form>
    );
}

export default DadosEntrega;
