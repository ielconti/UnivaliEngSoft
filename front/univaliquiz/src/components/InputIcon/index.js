import React from 'react'
import { MdLock, MdEmail } from 'react-icons/md'

import './styles.css'

export default function InputIcon({ state, setState, label, icon }) {

    return (
        <div className='inputContainer' >
            <div className='label' >{label}</div>
            <div className='row' >
                <input
                    className='input'
                    type='text'
                    value={state}
                    onChange={(e) => { setState(e.target.value) }}
                />

                {
                    icon === 'email' && <MdEmail className='icon' />
                }

                {
                    icon === 'lock' && <MdLock className='icon' />
                }
            </div>

        </div>
    )
}
