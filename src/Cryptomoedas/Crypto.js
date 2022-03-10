import { React, useState, useEffect} from "react";
import ReactDom from "react-dom";

function Crypto(){
    const [crypts, setCrypts] = useState([]);

    useEffect(() => {
        fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
            .then(res => res.json())
            .then(data =>setCrypts(data));
    }, []);

    const handleCrypts = crypts.map((crypt) => {
        return(
            <p>{crypt.baseAsset}</p>
        );
    });

    function handleChangeCrypto(event){
        console.log(crypts);
    }

    return(
        !crypts ? <h1>Carregando..</h1> : 
        <>
            <p>{handleCrypts}</p>
            <button onClick={handleChangeCrypto}>Evento</button>
        </>
    );
}


export default Crypto;