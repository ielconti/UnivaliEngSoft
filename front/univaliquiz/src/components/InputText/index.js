import React from 'react'

import './styles.css';

export default function InputText() {
    return (
        <div className='it--container' >
            <div className='label' style={{ color: 'black' }} >Nome da trilha</div>
            <div className='row' style={{ width: '90%' }} >
                <input
                    style={{ width: '100%' }}
                    type='text'
                    placeholder='Defina um nome para a trilha'
                />
            </div>
        </div>
    )
}
