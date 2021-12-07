import React from 'react'
import { FaFilePdf } from 'react-icons/fa';

import './styles.css';

export default function Relatorio() {
    return (
        <>
            <div className='relatorio--materia--tit' >TÍTULO DA MATÉRIA</div>
            <div className='relatorio--container' >
                <div className='relatorio--collumn' >
                    <div className='relatorio--section' >
                        <div className='fase--tit' >Fase 1</div>
                        <div className='relatorio--fase' >
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--header' >Questão</div>
                                <div className='relatorio--cell--header' >Gabarito</div>
                                <div className='relatorio--cell--header' >Avaliação</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >1</div>
                                <div className='relatorio--cell--gray' >A</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >2</div>
                                <div className='relatorio--cell--gray' >C</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >3</div>
                                <div className='relatorio--cell--gray' >D</div>
                                <div className='relatorio--cell--red' >incorreta</div>
                            </div>
                        </div>
                    </div>
                    <div className='relatorio--section' >
                        <div className='fase--tit' >Fase 2</div>
                        <div className='relatorio--fase' >
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--header' >Questão</div>
                                <div className='relatorio--cell--header' >Gabarito</div>
                                <div className='relatorio--cell--header' >Avaliação</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >1</div>
                                <div className='relatorio--cell--gray' >A</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >2</div>
                                <div className='relatorio--cell--gray' >C</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >3</div>
                                <div className='relatorio--cell--gray' >D</div>
                                <div className='relatorio--cell--red' >incorreta</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relatorio--collumn' >
                    <div className='relatorio--section' >
                        <div className='fase--tit' >Fase 3</div>
                        <div className='relatorio--fase' >
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--header' >Questão</div>
                                <div className='relatorio--cell--header' >Gabarito</div>
                                <div className='relatorio--cell--header' >Avaliação</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >1</div>
                                <div className='relatorio--cell--gray' >A</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >2</div>
                                <div className='relatorio--cell--gray' >C</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >3</div>
                                <div className='relatorio--cell--gray' >D</div>
                                <div className='relatorio--cell--red' >incorreta</div>
                            </div>
                        </div>
                    </div>
                    <div className='relatorio--section' >
                        <div className='fase--tit' >Fase 4</div>
                        <div className='relatorio--fase' >
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--header' >Questão</div>
                                <div className='relatorio--cell--header' >Gabarito</div>
                                <div className='relatorio--cell--header' >Avaliação</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >1</div>
                                <div className='relatorio--cell--gray' >A</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >2</div>
                                <div className='relatorio--cell--gray' >C</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >3</div>
                                <div className='relatorio--cell--gray' >D</div>
                                <div className='relatorio--cell--red' >incorreta</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relatorio--collumn' >
                    <div className='relatorio--section' >
                        <div className='fase--tit' >Fase 5</div>
                        <div className='relatorio--fase' >
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--header' >Questão</div>
                                <div className='relatorio--cell--header' >Gabarito</div>
                                <div className='relatorio--cell--header' >Avaliação</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >1</div>
                                <div className='relatorio--cell--gray' >A</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >2</div>
                                <div className='relatorio--cell--gray' >C</div>
                                <div className='relatorio--cell--green' >correta</div>
                            </div>
                            <div className='relatorio--row' >
                                <div className='relatorio--cell--gray' >3</div>
                                <div className='relatorio--cell--gray' >D</div>
                                <div className='relatorio--cell--red' >incorreta</div>
                            </div>
                        </div>
                    </div>
                    <div className='relatorio--section' >
                        <button className='button' onClick={() => { }} > <FaFilePdf size={15} /> EXPORTAR</button>
                    </div>
                </div>
            </div>
        </>
    )
}
