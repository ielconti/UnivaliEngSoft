import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi';
import { HiUserGroup } from 'react-icons/hi';

import { useUsuario } from '../../../providers/usuario';
import './styles.css';

export default function Trilhas() {

    const navigate = useNavigate();
    const { page, setPage } = useUsuario()

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
                        <HiUserGroup className='content--icon' />
                        <span className='materia--dif' > 16 Participantes</span>
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
                        <HiUserGroup className='content--icon' />
                        <span className='materia--dif' > 16 Participantes</span>
                    </div>
                </div>

                <div className='materia' onClick={() => setPage(4)} >
                    <FiPlusSquare style={{ margin: 'auto', marginTop: '20%' }} color='#fff' size={100} />
                    <div style={{ color: 'white' }} >Nova trilha</div>
                </div>

            </span>
        </div>
    )
}
