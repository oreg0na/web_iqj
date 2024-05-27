import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import GoBackIcon from './assets/GoBackIcon.svg'
import PlaceholderIcon from './assets/PlaceholderIcon.jpg'

import './EditUser.scss'

const EditUser: React.FC = () => {
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


    function handleChange() {

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