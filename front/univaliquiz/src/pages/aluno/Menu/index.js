import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdPerson, MdMenu } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';

import { useUsuario } from '../../../providers/usuario';

import Trilhas from '../Trilhas';
import Ranking from '../Ranking';
import Relatorio from '../Relatorio';

import logo from '../../../assets/logo.png'

import './styles.css';

export default function Menu() {

    const navigate = useNavigate();
    const { page, setPage } = useUsuario()

    return (
        <>
            <div className='tabBar' >
                <img className='logoMenu' src={logo} />
                <div className='menu'>
                    <div className={page === 0 ? 'menuItem--selecionado' : 'menuItem'} onClick={() => setPage(0)} >
                        <MdMenu className='menuIcon' size={20} /> <span>TRILHAS</span>
                    </div>
                    <div className={page === 1 ? 'menuItem--selecionado' : 'menuItem'} onClick={() => setPage(1)} >
                        <IoMdTrophy className='menuIcon' size={16} /> <span>RANKING</span>
                    </div>
                    <div className={page === 2 ? 'menuItem--selecionado' : 'menuItem'} onClick={() => setPage(2)} >
                        <MdPerson className='menuIcon' size={20} /> <span>CONTA</span>
                    </div>
                </div>
            </div>
            { page === 0 && <Trilhas /> }
            { page === 1 && <Ranking /> }
            {/* { page === 2 && <Conta /> } */}
            { page === 3 && <Relatorio /> }
        </>
    )
}
