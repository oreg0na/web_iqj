import React from 'react'

import './EditNews.scss'
import { useParams } from 'react-router-dom'

const EditNews: React.FC = () => {
    const params = useParams<{id: string}>()

    return (
        <div className='news-edit-container'>
            <div className='title-block'>
                <span className='title'>News Edit {params.id}</span>
            </div>
        </div>
    )
}

export default EditNews