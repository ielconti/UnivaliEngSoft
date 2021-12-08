import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi';
import { MdGroups, MdGroup } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { IoMdTrophy } from 'react-icons/io';

import { useUsuario } from '../../../providers/usuario';

//HiUserGroup
import './styles.css';

export default function Ranking() {

    const navigate = useNavigate();
    const { setPage } = useUsuario()

    return (
        <div>
            <span className='materiasContainer' >

                {/* <div className='materia' onClick={() => setPage(3)} > */}
                <div className='materia' onClick={() => navigate('/aluno/relatorio')} >
                    <div className='materia--content--ranking' >
                        <span className='materia--tit' >Lógica de programação</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <IoMdTrophy className='content--icon' />
                        <span className='materia--dif' >8º Lugar</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <HiUserGroup className='content--icon' />
                        <span className='materia--dif' > 16 Participantes</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <span className='materia--dif' >Pontuação 5/15</span>
                        <div className='progbar' >
                            <div className='progValue4' />
                        </div>
                    </div>
                </div>

                <div className='materia' onClick={() => navigate('/aluno/relatorio')} >
                    <div className='materia--content--ranking' >
                        <span className='materia--tit' >Estrutura de dados</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <IoMdTrophy className='content--icon' />
                        <span className='materia--dif' >4º Lugar</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <HiUserGroup className='content--icon' />
                        <span className='materia--dif' > 16 Participantes</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <span className='materia--dif' >Pontuação 9/15</span>
                        <div className='progbar' >
                            <div className='progValue2' />
                        </div>
                    </div>
                </div>

                <div className='materia' onClick={() => navigate('/aluno/relatorio')} >
                    <div className='materia--content--ranking' >
                        <span className='materia--tit' >Banco de dados</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <IoMdTrophy className='content--icon' />
                        <span className='materia--dif' >1º Lugar</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <HiUserGroup className='content--icon' />
                        <span className='materia--dif' > 16 Participantes</span>
                    </div>
                    <div className='materia--content--ranking' >
                        <span className='materia--dif' >Pontuação 15/15</span>
                        <div className='progbar' >
                            <div className='progValue3' />
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
