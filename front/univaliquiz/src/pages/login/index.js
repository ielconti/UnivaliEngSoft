import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import InputIcon from '../../components/InputIcon';
import InputPassword from '../../components/InputPassword';
import logo from '../../assets/logo.png'

import './styles.css';

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tipo, setTipo] = useState('Aluno')

    return (
        <div>
            <div className='square' >

                <img className='logo' src={logo} />
                <div className='title' >Faça o login para entrar</div>

                <InputIcon state={email} setState={setEmail} label='E-mail' icon='email' />
                <InputPassword state={password} setState={setPassword} label='Senha' icon='lock' />

                <div className='radio' onChange={(e) => setTipo(e.target.value)} >
                    <div>
                        <input type='radio' value='Aluno' name='tipo' defaultChecked /> Aluno
                    </div>
                    <div>
                        <input type='radio' value='Professor' name='tipo' /> Professor
                    </div>
                </div>

                <div className='forgot' >Esqueci minha senha</div>

                {/* <button className='button' onClick={() => navigate('/aluno/trilhas')} >Avançar</button> */}
                <button className='button' onClick={() => { tipo === 'Aluno' ? navigate('/aluno/menu') : navigate('/professor/menu') }} >Avançar</button>

            </div>

            <div className='termsContainer' >
                <a className='terms' >Termos de uso</a>
                <a className='terms' >•</a>
                <a className='terms' >Privacidade</a>
                <a className='terms' >•</a>
                <a className='terms' >Suporte</a>
            </div>

        </div>
    )
}
