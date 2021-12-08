import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import './styles.css';

export default function NovoAluno() {

    const navigate = useNavigate();

    return (
        <>
            <div className='tabBar' >
                <img className='logoMenu' src={logo} />
                <span className='tabTitle' ></span>
            </div>

            <div className='na--container' >

                <div className='na--content' >
                    <div style={{ fontWeight: 'bold' }} > Novo aluno </div>
                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Matrícula</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina sua matrícula'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Nome</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina seu nome'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >E-mail</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina seu e-mail'
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                        <button className='button' onClick={() => { }} >Salvar</button>
                    </div>
                </div>


            </div>
        </>
    )
}
