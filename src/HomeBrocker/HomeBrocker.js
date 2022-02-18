import React from "react";
import ReactDOM from "react";
import './HomeBrocker.css';

const valor = 210018.58
const moeda = 'BTC'
const variacao = 7.06;

const HomeBrocker = () => {
    return(
        <div className="btc-infos">
            <p className="valor">{valor}</p>
            <p>{moeda}</p>
            {variacao >= 8 ? <p>{variacao}</p> : <p>{variacao}</p>}
        </div>
    );
}

export default HomeBrocker;