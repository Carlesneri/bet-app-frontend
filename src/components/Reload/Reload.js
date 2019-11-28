import React from 'react'
import reload_btn from './refresh-256.ico'
import './Reload.css'

export default function Reload() {
    return(
        <div className='reload'>
            <a href='/'>
                <img src = {reload_btn} alt='reload' />
            </a>
        </div>
    )
}