import React from 'react'
import './Menu.scss'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate()

    return (
        <div className='menu'>
            <span className='title'>IQJ</span>
            <div className='menu-items'>
                <div onClick={() => navigate('/panel/user')} className='menu-item menu-item-selected'>
                    <img/>
                    <span>Пользователи</span>
                </div>
                <div onClick={() => navigate('/panel/news')} className='menu-item'>
                    <img/>
                    <span>Новости</span>
                </div>
                <div onClick={() => navigate('/panel/user')} className='menu-item'>
                    <img/>
                    <span>Объявления</span>
                </div>
            </div>
        </div>
    )
}

export default Menu