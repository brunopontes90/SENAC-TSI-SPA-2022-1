import { React, useState, useEffect} from "react";
import ReactDom from "react-dom";

function Crypto(){
    const [crypts, setCrypts] = useState({
        ativo: crypts.baseAsset,
        valorAbertura: crypts.openPrice,
        valorFechamento: crypts.lastPrice
    });

    useEffect(() => {
        fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
            .then(res => res.json())
            .then(data =>setCrypts(data));
    }, [crypts.ativo, crypts.valorAbertura, crypts.valorFechamento]);

    function handleChangeCrypto(event){
        setCrypts({
            ...crypts,
            ativo: crypts.baseAsset,
            valorAbertura: event.target.value,
            valorFechamento: event.target.value
        });

    }

    return(
        !crypts ? <h1>Carregando</h1> : 
        <>
            <p>{crypts.ativo}</p>
        </>
    );
}


export default Crypto;