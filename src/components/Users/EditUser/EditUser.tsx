import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import GoBackIcon from './assets/GoBackIcon.svg'
import PlaceholderIcon from './assets/PlaceholderIcon.jpg'

import './EditUser.scss'

const EditUser: () => void = () => {
    const navigate= useNavigate()
    const { uid } = useParams();
    const [formData, setFormData] = useState({
        institute: '',
        position: '',
        phone: '',
        role: '',
        email: '',
        lastName: '',
        firstName: '',
        patronymic: '',
        login: '',
        password1: '',
        password2: '',
        password3: ''
    });


    const handleFormSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const data = {
            institute: formData?.institute,
            position: formData?.position,
            phone: formData?.phone,
            role: formData?.role,
            email: formData?.email,
            lastName: formData?.lastName,
            firstName: formData?.firstName,
            patronymic: formData?.patronymic,
            login: formData?.login,
            password1: formData?.password1,
            password2: formData?.password2,
            password3: formData?.password3,
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch('https://xyz/form-submit', requestOptions)
            const res = await response.json()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className='user-edit-container'>
            <div className='title-block'>
                <span className='title'>Editing a user {uid}</span>
            </div>
            <div className='edit-block'>
                <img onClick={() => navigate('/panel/user/list')} className='back-icon' src={GoBackIcon} />
                <div className='fields'>
                    <div className='fileds-block'>
                        <img className='profile-icon' src={PlaceholderIcon}/>
                        <input id="institute" className="input-field" value={formData.institute}
                               onChange={handleChange}/>
                        <input id="position" className="input-field" value={formData.position}
                               onChange={handleChange}/>
                        <input id="phone" className="input-field" value={formData.phone}
                               onChange={handleChange}/>
                        <input id="role" className="input-field" value={formData.role}
                               onChange={handleChange}/>
                    </div>
                    <div className='fileds-block'>
                        <input id="email" className="input-field" value={formData.email}
                               onChange={handleChange}/>
                        <input id="last-name" className="input-field" value={formData.lastName}
                               onChange={handleChange}/>
                        <input id="first-name" className="input-field" value={formData.firstName}
                               onChange={handleChange}/>
                        <input id="patronymic" className="input-field" value={formData.patronymic}
                               onChange={handleChange}/>
                        <input id="login" className="input-field" value={formData.login}
                               onChange={handleChange}/>
                        <input id="password-1" className="input-field" value={formData.password1}
                               onChange={handleChange}/>
                        <input id="password-2" className="input-field" value={formData.password2}
                               onChange={handleChange}/>
                        <input id="password-3" className="input-field" value={formData.password3}
                               onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser