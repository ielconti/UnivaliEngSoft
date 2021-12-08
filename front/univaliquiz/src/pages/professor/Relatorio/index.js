import React from 'react'

import './styles.css';

export default function Relatorio() {
    return (
        <div className='prt--container' >
            <div className='prt--table' >
                <div style={{ color: 'black', fontWeight: 'bold' }} >TÍTULO DA TRILHA</div>
                <div className='prt--table--row' >
                    <div className='prt--cell--header1' > Aluno </div>
                    <div className='prt--cell--header2' >Nota</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Anakin Skywalker </div>
                    <div className='prt--cell--green' >8</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Ben Solo </div>
                    <div className='prt--cell--green' >7</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Obi-Wan Kenobi </div>
                    <div className='prt--cell--green' >7</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Luke Skywalker </div>
                    <div className='prt--cell--red' >4</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Leia Organa </div>
                    <div className='prt--cell--green' >9</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Yoda </div>
                    <div className='prt--cell--red' >3</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Boba Fett </div>
                    <div className='prt--cell--green' >7</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Han Solo </div>
                    <div className='prt--cell--red' >5</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Chewbacca </div>
                    <div className='prt--cell--green' >7</div>
                </div>
                <div className='prt--table--row' >
                    <div className='prt--cell--gray' > Padmé Amidala </div>
                    <div className='prt--cell--red' >5</div>
                </div>
                
            </div>
        </div>
    )
}
