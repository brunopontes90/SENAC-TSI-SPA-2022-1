import React, { useReducer, useState } from "react";

const actions = {
    SOMAR: "SOMAR",
    SUBTRAIR: "SUBTRAIR",
    MULTIPLICAR: "MULTIPLICAR",
    DIVIDIR: "DIVIDIR",
    ZERAR: "ZERAR",
};

function Reducer(state, action){
    switch(action.type){
        case actions.SOMAR:
            return {...state, count: state.count + 1}
        case actions.SUBTRAIR:
            return {...state, count: state.count - 1}
        case actions.MULTIPLICAR:
            return {...state, count: state.count * 2}
        case actions.DIVIDIR:
            return {...state, count: state.count / 2}
        case actions.ZERAR:
            return {...state, count: 0}
        default:
            return state;

    }
}

function Contador(){
    const initialValue = { count: 0}
    const [state, dispath] = useReducer(Reducer, initialValue);

    return (
        <>
            <h1>Contador</h1>
            <p>{state.count}</p>
            <button onClick={ () => dispath({type: actions.SUBTRAIR}) }>-</button>
            <button onClick={ () => dispath({type: actions.SOMAR})}>+</button>
            <button onClick={ () => dispath({type: actions.MULTIPLICAR}) }>*</button>
            <button onClick={ () => dispath({type: actions.DIVIDIR})}>/</button>
            <button onClick={ () => dispath({type: actions.ZERAR})}>Zerar</button>
        </>
    );
}

export default Contador;