import React from "react";
import ReactDOM from "react";

const acao = [
    {
        nome: "PETR4",
        preco: 3.50,
        cresc: -12.32
    },
    {
        nome: "OIBR4",
        preco: 0.17,
        cresc: -18
    },
    {
        nome: "OUTRO",
        preco: 0.5,
        cresc: -32
    },
];

function Acoes(){
    return acoes.map((acao, indexAcao) => {
       return <Acao acao={acao, indexAcao} />
    });
}

function Acao(props){
    return (
        <div>{props.acao.nome} | {props.acao.preco} | {props.acao.cresc}</div>
    );
}

export default Acoes;