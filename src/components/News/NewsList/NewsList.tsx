import { useEffect, useState } from 'react'
import {getNews} from "../../../api/news";
import './NewsList.scss'
import { addNotification } from '../../../store/slices/notificationSlice'
import { useNavigate } from 'react-router-dom'

const NewsList = () => {
    const navigate = useNavigate()

    const [roleFilter, setRoleFilter] = useState(false)

    return (
        <div className='news-list-container'>
            <div className='title-block'>
                <span className='title'>News List</span>
                <div className='filters-block'>
                    <div onClick={() => setRoleFilter(true)} className='filter-block'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsList