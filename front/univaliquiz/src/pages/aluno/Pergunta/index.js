import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { MdPerson, MdMenu } from 'react-icons/md';
import { IoMdTrophy } from 'react-icons/io';


import logo from '../../../assets/logo.png'
import code from '../../../assets/code.png'

import './styles.css';

export default function Pergunta() {

    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [alternativa, setAlternativa] = useState('')

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        toggle()
    }, []);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds < 120) {
                    setSeconds(seconds => seconds + 1);
                } else { setSeconds(0) }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    return (
        <div className='page--container' >
            <div className='tabBar' >
                <img className='logoMenu' src={logo} />
                <span className='tabTitle' >TÍTULO DA MATÉRIA</span>
            </div>

            <span className='top--tip' >Selecione uma alternativa para prosseguir</span>

            <div className='pergunta--container' >

                <span className='container--header' >
                    <div className='container--header--item' >
                        <span style={{ marginRight: '5px' }} >Pergunta: </span>
                        <div className='filled--orb' />
                        <div className='empty--orb' />
                        <div className='empty--orb' />
                    </div>
                    <div className='container--header--item' >
                        <span style={{ marginRight: '5px' }} >Fase: </span>
                        <div className='filled--orb' />
                        <div className='filled--orb' />
                        <div className='filled--orb' />
                        <div className='empty--orb' />
                        <div className='empty--orb' />
                    </div>
                    <div>
                        <span>Tempo: {seconds} / 120 </span>
                        <div style={{ width: '120px', height: '12px', backgroundColor: '#707070' }} >
                            <div style={{ width: seconds, height: '12px', backgroundColor: '#0f0' }} />
                        </div>
                    </div>
                </span>

                <div style={{ justifyContent: 'space-between', display: 'flex', paddingLeft: '50px', paddingRight: '50px', paddingTop: '15px', paddingBottom: '15px' }} >
                    <div className='image--container' >
                        <img className='image--content' src={code} />
                    </div>
                    <div className='questao--container' >
                        <div className='alternativa' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper, nunc id posuere elementum, ex nunc tincidunt urna, ac mollis erat dui nec metus
                        </div>
                        <div className='alternativa' >
                            <input type='radio' value='1' name='alternativa' onChange={(e) => setAlternativa(e.target.value)} /> Cras interdum felis id nisl semper
                        </div>
                        <div className='alternativa' >
                            <input type='radio' value='2' name='alternativa' onChange={(e) => setAlternativa(e.target.value)} /> Aenean a sem nulla
                        </div>
                        <div className='alternativa' >
                            <input type='radio' value='3' name='alternativa' onChange={(e) => setAlternativa(e.target.value)} /> Proin ac varius lorem
                        </div>
                        <div className='alternativa' >
                            <input type='radio' value='4' name='alternativa' onChange={(e) => setAlternativa(e.target.value)} /> Cras dolor tellus, auctor eu elit non, aliquam euismod 
                        </div>
                        <div className='bt--avancar' >
                            <button className={ alternativa === '' ? 'emptyButton' : 'button' } onClick={() => {}} >Avançar</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
