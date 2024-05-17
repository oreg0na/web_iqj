import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import GoBackIcon from './assets/GoBackIcon.svg'
import PlaceholderIcon from './assets/PlaceholderIcon.jpg'

import './EditUser.scss'

const EditUser: React.FC = () => {
    const navigate = useNavigate()
    const params = useParams<{uid: string}>()

    return (
        <div className='user-edit-container'>
            <div className='title-block'>
                <span className='title'>Editing a user {params.uid}</span>
            </div>
            <div className='edit-block'>
                <img onClick={() => navigate('/panel/user/list')} className='back-icon' src={GoBackIcon} />
                <div className='fields'>
                    <div className='fileds-block'>
                        <img className='profile-icon' src={PlaceholderIcon} />
                        <input className='input-field'/>
                        <input className='input-field'/>
                        <input className='input-field'/>
                    </div>
                    <div className='fileds-block'>
                        <input className='input-field' />
                        <input className='input-field' />
                        <input className='input-field' />
                        <input className='input-field' />
                        <input className='input-field' />
                        <input className='input-field' />
                        <input className='input-field' />
                        <input className='input-field' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser