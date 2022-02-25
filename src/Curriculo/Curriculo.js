import { React, useState, useEffect} from "react";
import ReactDom from "react-dom";

function Descricao(){
    const [developer, setDeveloper] = useState({
        lang: "PHP",
        anos: 0,
        nome: "Bruno"
    });

    useEffect(() => {
        document.title = developer.nome;
        console.log('Rodou useEffect');
    }, [developer.nome]);

    // [] se estiver vazio, ira executar apenas uma vez (enquanto for true  )

    function handleClickLinguagem(){
        setDeveloper({
            ...developer,
            lang: "Javascript",
            anos: 0
        });
    }

    function handleClickAnos(event){
        setDeveloper({
            ...developer,
            lang: developer.lang,
            anos: event.target.value
        });
    }

    function handleChangeNome(event){
        setDeveloper({
            ...developer,
            nome: event.target.value
        });
    }

    return(
        <>
            <p>Eu sei {developer.lang}</p>
            <p>Trabalho com essa linguagem a {developer.anos} anos</p>
            <input type="number" onChange={handleClickAnos} />
            <input type="text" onChange={handleChangeNome} placeholder="Nome"/>
            <button onClick={handleClickLinguagem}>Alterar Linguagem</button>
        </>
    );
}


export default Descricao;