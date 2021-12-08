import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

import { useUsuario } from '../../../providers/usuario';
import logo from '../../../assets/logo.png'

import './styles.css';

const ListAluno = ({ id, nome }) => {

    const [checked, setChecked] = useState(false);
    const { todosAlunos } = useUsuario()

    return (
        <div className='list--item' onClick={() => setChecked(!checked)} id={id} key={id} >
            <div className='list--item--name' >{nome}</div>
            {
                (checked || todosAlunos) && <FaCheck className='list--item--icon' color='#00477F' size={15} />
            }
        </div>
    )
}

const ListQuestao = ({ id, nome }) => {

    const [checked, setChecked] = useState(false);
    const { todasQuestoes } = useUsuario()

    return (
        <div className='list--item' onClick={() => setChecked(!checked)} id={id} key={id} >
            <div className='list--item--name' >{nome}</div>
            {
                (checked || todasQuestoes) && <FaCheck className='list--item--icon' color='#00477F' size={15} />
            }
        </div>
    )
}

export default function NovaTrilha() {

    const navigate = useNavigate();
    const { setTodosAlunos, setTodasQuestoes } = useUsuario()

    const alunos = [
        { id: 1, nome: 'Anakin Skywalker' },
        { id: 2, nome: 'Ben Solo' },
        { id: 3, nome: 'Obi-Wan Kenobi' },
        { id: 4, nome: 'Luke Skywalker' },
        { id: 5, nome: 'Leia Organa' },
        { id: 6, nome: 'Yoda' },
        { id: 7, nome: 'Boba Fett' },
        { id: 8, nome: 'Han Solo' },
        { id: 9, nome: 'Chewbacca' },
        { id: 10, nome: 'Padmé Amidala' },
    ]

    const questoes = [
        { id: 1, nome: '1 - Laço de repetição' },
        { id: 2, nome: '2 - Recursividade' },
        { id: 3, nome: '3 - Iteração' },
        { id: 4, nome: '4 - Função recursiva' },
        { id: 5, nome: '5 - Atribuição de valores' },
        { id: 6, nome: '6 - Palavras reservadas' },
        { id: 7, nome: '7 - Caracteres especiais' },
        { id: 8, nome: '8 - Listas' },
        { id: 9, nome: '9 - Sintaxe' },
        { id: 10, nome: '10 - Semântica' },
    ]

    return (
        <>
            <div className='tabBar' >
                <img className='logoMenu' src={logo} />
                <span className='tabTitle' ></span>
            </div>
            <div className='nt--container' >
                <div className='nt--section' >
                    <div style={{ marginTop: '5px', marginBottom: '10px', fontWeight: 'bold' }} >Alunos</div>
                    {
                        alunos.map((id, nome) => {
                            return ListAluno(id, nome)
                        })
                    }
                    <div style={{ marginTop: '5px' }} >
                        <input type='checkbox' onChange={(e) => setTodosAlunos(e.target.checked)} />Marcar todos
                    </div>
                    <div>
                        <button className='button' onClick={() => navigate('/professor/novoaluno')} >Novo aluno</button>
                    </div>
                </div>
                <div className='nt--section' >
                    <div style={{ marginTop: '5px', marginBottom: '10px', fontWeight: 'bold' }} >Questões</div>
                    {
                        questoes.map((id, nome) => {
                            return ListQuestao(id, nome)
                        })
                    }
                    <div style={{ marginTop: '5px' }} >
                        <input type='checkbox' onChange={(e) => setTodasQuestoes(e.target.checked)} />Marcar todas
                    </div>
                    <div>
                        <button className='button' onClick={() => navigate('/professor/novaquestao')} >Nova questão</button>
                    </div>
                </div>
                <div className='nt--section--noline' >
                    <div className='inputContainer' style={{ marginLeft: '15%', marginTop: '25%' }} >
                        <div className='label' style={{ color: 'black' }} >Nome da trilha</div>
                        <div className='row' style={{ width: '90%' }} >
                            <input
                                style={{ width: '100%' }}
                                type='text'
                                placeholder='Defina um nome para a trilha'
                            />
                        </div>
                    </div>
                    <div className='inputContainer' style={{ marginLeft: '15%' }} >
                        <div className='label' style={{ color: 'black' }} >Dificuldade da trilha</div>
                        <div className='row' style={{ width: '90%' }} >
                            <select style={{ width: '100%' }} >
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }} >
                        <input type='checkbox' onChange={(e) => { }} />Disponibilizar trilha
                    </div>
                    <div>
                        <button className='button' onClick={() => { }} >Salvar trilha</button>
                    </div>
                </div>
            </div>
        </>
    )
}
