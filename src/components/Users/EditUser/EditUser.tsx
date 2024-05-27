import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import GoBackIcon from './assets/GoBackIcon.svg'
import PlaceholderIcon from './assets/PlaceholderIcon.jpg'

import './EditUser.scss'

const EditUser: React.FC = () => {
    const navigate = useNavigate()
    const params = useParams<{uid: string}>()
    const institute = document.getElementById('institute') as HTMLInputElement | null;
    const position = document.getElementById('position') as HTMLInputElement | null;
    const phone = document.getElementById('phone') as HTMLInputElement | null;
    const role = document.getElementById('role') as HTMLInputElement | null;
    const email = document.getElementById('email') as HTMLInputElement | null;
    const last_name = document.getElementById('last-name') as HTMLInputElement | null;
    const first_name = document.getElementById('first-name') as HTMLInputElement | null;
    const patronymic = document.getElementById('patronymic') as HTMLInputElement | null;
    const login = document.getElementById('login') as HTMLInputElement | null;
    const password_1 = document.getElementById('password-1') as HTMLInputElement | null;
    const password_2 = document.getElementById('password-2') as HTMLInputElement | null;
    const password_3 = document.getElementById('password-3') as HTMLInputElement | null;



    return (
        <div className='user-edit-container'>
            <div className='title-block'>
                <span className='title'>Editing a user {params.uid}</span>
            </div>
            <div className='edit-block'>
                <img onClick={() => navigate('/panel/user/list')} className='back-icon' src={GoBackIcon} />
                <div className='fields'>
                    <div className='fileds-block'>
                        <img className='profile-icon' src={PlaceholderIcon}/>
                        <input id='institute' className='input-field'/>
                        <input id='position' className='input-field'/>
                        <input id='phone' className='input-field'/>
                        <input id='role' className='input-field'/>
                    </div>
                    <div className='fileds-block'>
                        <input id='email' className='input-field'/>
                        <input id='last-name' className='input-field'/>
                        <input id='first-name' className='input-field'/>
                        <input id='patronymic' className='input-field'/>
                        <input id='login' className='input-field'/>
                        <input id='password-1' className='input-field'/>
                        <input id='password-2' className='input-field'/>
                        <input id='password-3' className='input-field'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser