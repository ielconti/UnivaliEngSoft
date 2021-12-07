import React, { useState } from 'react'
import { MdLock, MdEmail } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import './styles.css'

export default function InputPassword({ state, setState, label, icon }) {

    const [sec, setSec] = useState(false)

    return (
        <div className='inputContainer' >
            <div className='label' >{label}</div>
            <div className='row' >
                <input
                    className='input'
                    type={sec ? 'text' : 'password'}
                    value={state}
                    onChange={(e) => { setState(e.target.value) }}
                />

                {
                    icon === 'email' && <MdEmail className='icon' />
                }

                {
                    icon === 'lock' && <MdLock className='icon' />
                }

                {
                    sec ?
                        <AiFillEyeInvisible className='secIcon' onClick={() => setSec(!sec)} />
                        :
                        <AiFillEye className='secIcon' onClick={() => setSec(!sec)} />
                }
            </div>

        </div>
    )
}
