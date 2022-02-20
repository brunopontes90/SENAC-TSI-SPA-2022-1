import './HomeBrocker.css';
import React from "react";
import ReactDOM from "react";

const bitcoin = [210018.58, 'BTC', 7.06];

const HomeBrocker = () => {
    for(let index = 0; bitcoin.length; index++) {
        const variation = bitcoin[2] >= 8 ? <p className="positive"> + {bitcoin[2]}</p> : <p className="negative">  - {bitcoin[2]}</p>;
        return(
            <div className="btc-infos">
                <p className="value">{bitcoin[0]}</p>
                <p className="acronym">{bitcoin[1]}</p>
                <p className="variation">{variation}</p>
            </div>
        );
    }
}
export default HomeBrocker;