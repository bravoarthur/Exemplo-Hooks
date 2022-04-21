import React from "react";

// esse e o estado default do Context. Quando eu crio o provider e mudo o Value eu anulo o default
const ValidacoesCadastro = React.createContext({
    cpf: semValidacao,
    senh: semValidacao,
    nome: semValidacao
});

function semValidacao(dados) {
    return { valido: true, texto: "" };
}

export default ValidacoesCadastro;
