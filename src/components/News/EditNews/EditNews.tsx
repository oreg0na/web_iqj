import React from 'react'

import './EditNews.scss'
import {useNavigate, useParams} from 'react-router-dom'

import GoBackIcon from './assets/GoBackIcon.svg'

const EditNews: React.FC = () => {
    const params = useParams<{id: string}>()
    const navigate = useNavigate()

    return (
        <div className='news-edit-container'>
            <div className='title-block'>
                <span className='title'>News Edit {params.id}</span>
            </div>
            <div className='edit-block'>
                <img onClick={() => navigate('/panel/news/list')} className='back-icon' src={GoBackIcon} />
            </div>
        </div>
    )
}

export default EditNews