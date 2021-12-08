import React from 'react'
import { RiImageAddFill } from 'react-icons/ri';

export default function Conta() {
    return (
        <div className='conta--container' >

            <div className='conta--pic' >
                <RiImageAddFill className='picture--icon' color='#fff' size={100} />
            </div>

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
    )
}
