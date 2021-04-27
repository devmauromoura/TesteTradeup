import React, {createContext, useContext, useState} from 'react';
import { IHookGeral, IAuth, IUsers, IModal, ILoading } from './typescript';

const iniAuth: IAuth = {
    email: '',
    password: '',
    token: '',
    loading: false
};

const iniUsers: IUsers = {
    loading : false,
    page: null,
    total_pages: null,
    list: []
};

const iniModal: IModal = {
    title: 'Título',
    message: 'Mensagem',
    icon: 'alert',
    visible: false,
    timer: false
};

const iniLoading: ILoading = {
    visible: false,
};

//Creator
const GeralContext = createContext();

//Geral Provider
const GeralProvider = ({children}) => {
    const [auth, setAuth] = useState(iniAuth)
    const [users, setUsers] = useState(iniUsers)
    const [cModal, setCModal] = useState(iniModal)
    const [cLoading, setCLoading] = useState(iniLoading)

    return(
        <GeralContext.Provider value={{
            auth,
            setAuth,
            users,
            setUsers,
            cModal,
            setCModal,
            cLoading,
            setCLoading
        }}>
            {children}
        </GeralContext.Provider>
    );
};

export default GeralProvider;

export const useGeral = () => {
    const context = useContext(GeralContext);
    const {auth, setAuth, users, setUsers, cModal, setCModal, cLoading, setCLoading}:IHookGeral = context;

    return {auth, setAuth, users, setUsers, cModal, setCModal, cLoading, setCLoading}
}; 
