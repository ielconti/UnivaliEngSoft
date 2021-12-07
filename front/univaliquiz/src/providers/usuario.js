import React, { createContext, useState, useContext } from "react";

export const UsuarioContext = createContext({});

export const UsuarioProvider = ( props ) => {

    const [page, setPage] = useState(0);    
    const [todosAlunos, setTodosAlunos] = useState(false);
    const [todasQuestoes, setTodasQuestoes] = useState(false);

    return(
        <UsuarioContext.Provider value={{ 
            page, setPage, 
            todosAlunos, setTodosAlunos,
            todasQuestoes, setTodasQuestoes
         }} >
            {props.children}
        </UsuarioContext.Provider>
    );
}

export const useUsuario = () => useContext(UsuarioContext);