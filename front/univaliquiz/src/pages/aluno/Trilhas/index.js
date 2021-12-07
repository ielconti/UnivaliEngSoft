import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi';

import './styles.css';

export default function Trilhas() {

    const navigate = useNavigate();

    return (
        <div>
            <span className='materiasContainer' >

                <div className='materia' onClick={() => navigate('/aluno/pergunta')} >
                    <div className='materia--content' >
                        <span className='materia--tit' >Lógica de programação</span>
                    </div>
                    <div className='materia--content' >
                        <span className='materia--dif' >Dificuldade: Intermediário</span>
                        <div className='difbar' >
                            <div className='difValue1' />
                        </div>
                    </div>
                    <div className='materia--content' >
                        <span className='materia--dif' >Progresso: 0%</span>
                        <div className='progbar' >
                            <div className='progValue1' />
                        </div>
                    </div>
                </div>

                <div className='materia' onClick={() => navigate('/aluno/pergunta')} >
                    <div className='materia--content' >
                        <span className='materia--tit' >Estrutura de dados</span>
                    </div>
                    <div className='materia--content' >
                        <span className='materia--dif' >Dificuldade: Iniciante</span>
                        <div className='difbar' >
                            <div className='difValue2' />
                        </div>
                    </div>
                    <div className='materia--content' >
                        <span className='materia--dif' >Progresso: 60%</span>
                        <div className='progbar' >
                            <div className='progValue2' />
                        </div>
                    </div>
                </div>

                <div className='materia' onClick={() => navigate('/aluno/pergunta')} >
                    <div className='materia--content' >
                        <span className='materia--tit' >Banco de dados</span>
                    </div>
                    <div className='materia--content' >
                        <span className='materia--dif' >Dificuldade: Avançado</span>
                        <div className='difbar' >
                            <div className='difValue3' />
                        </div>
                    </div>
                    <div className='materia--content' >
                        <span className='materia--dif' >Progresso: 60%</span>
                        <div className='progbar' >
                            <div className='progValue2' />
                        </div>
                    </div>
                </div>

                {/* <div className='materia' >
                    <FiPlusSquare style={{ margin: 'auto', marginTop: '20%' }} color='#fff' size={100} />
                </div> */}

            </span>
        </div>
    )
}
