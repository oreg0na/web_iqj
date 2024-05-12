import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.scss'

interface MenuItem {
    name: string
    path: string
}

function Menu() {
    const [selected, setSelected] = useState<number>(0)
    const navigate = useNavigate()

    const menuItems: MenuItem[] = [
        { name: 'Пользователи', path: '/panel/user' },
        { name: 'Новости', path: '/panel/news' },
        { name: 'Объявления', path: '/panel/ad' }
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
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu
