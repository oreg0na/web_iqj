import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AdIcon from './assets/AdIcon.svg'
import NewsIcon from './assets/NewsIcon.svg'
import UsersIcon from './assets/UsersIcon.svg'

import './Menu.scss'

interface MenuItem {
    name: string
    path: string
    icon: string
}

function Menu() {
    const [selected, setSelected] = useState<number>(0)
    const navigate = useNavigate()

    const menuItems: MenuItem[] = [
        { name: 'Пользователи', path: '/panel/user', icon: UsersIcon },
        { name: 'Новости', path: '/panel/news', icon: NewsIcon },
        { name: 'Объявления', path: '/panel/ad', icon: AdIcon }
    ]

    const handleItemClick = (index: number, path: string): void => {
        setSelected(index)
        navigate(path)
    }

    return (
        <div className='menu'>
            <div className='title'>IQJ</div>
            <div className='menu-items'>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${selected === index ? 'menu-item-selected' : ''}`}
                        onClick={() => handleItemClick(index, item.path)}>
                        <img src={item.icon} />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu
