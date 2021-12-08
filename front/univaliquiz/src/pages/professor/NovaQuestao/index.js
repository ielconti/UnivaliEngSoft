import React from 'react'
import { ImAttachment } from 'react-icons/im';
import { BiText } from 'react-icons/bi';


import logo from '../../../assets/logo.png'
import InputText from '../../../components/InputText';
import './styles.css';

export default function NovaQuestao() {
    return (
        <div>
            <div className='tabBar' >
                <img className='logoMenu' src={logo} />
                <span className='tabTitle' >NOVA QUESTÃO</span>
            </div>
            <div className='nq--container' >
                <div className='nq--content' >
                    <div className='nq--row' >
                        <div className='nq--slot' >
                            <ImAttachment className='nq--slot--icon' color='#fff' size={50} />
                            <div style={{ color: 'white' }} >Anexo</div>
                        </div>
                        <div className='nq--slot' >
                            <BiText className='nq--slot--icon' color='#fff' size={50} />
                            <div style={{ color: 'white' }} >Código</div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Dificuldade da questão</div>
                            <div className='row' style={{ width: '100%' }} >
                                <select style={{ width: '100%' }} >
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >ID da questão</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina um ID para a questão'
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Título da questão</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina um título para a questão'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nq--content' >
                    <div style={{ marginTop: '45px' }} />
                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Enunciado</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina o enunciado'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Alternativa 1</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina a alternativa 1'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Altenativa 2</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina a alternativa 2'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Alternativa 3</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina a alternativa 3'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='nq--row' >
                        <div className='nq--input' >
                            <div className='label' style={{ color: 'black' }} >Alternativa 4</div>
                            <div className='row' style={{ width: '100%' }} >
                                <input
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Defina a alternativa 4'
                                />
                            </div>
                        </div>
                    </div>
                    <button className='button' onClick={() => {}} >Cadastrar</button>
                </div>
            </div>
        </div>
    )
}
