import React, { useCallback, useEffect, useState } from 'react'
import { getUsers } from '../../../api/users'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import Notification from '../../Notification/Notification'

import './UserList.scss'

const UserList = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users)

    const [roleFilter, setRoleFilter] = useState('')
    const [dateFilterStart, setDateFilterStart] = useState('')
    const [dateFilterEnd, setDateFilterEnd] = useState('')
    const [notificationQueue, setNotificationQueue] = useState<string[]>([])
    const [currentNotification, setCurrentNotification] = useState<string | null>(null)

    useEffect(() => {
        dispatch(getUsers({}))
    }, [])

    useEffect(() => {
        if (users.status === 'failed' && users.error) {
            showNotification(users.error)
        }
    }, [users.status])

    useEffect(() => {
        if (currentNotification === null && notificationQueue.length > 0) {
            setCurrentNotification(notificationQueue.shift()!)
        }
    }, [currentNotification, notificationQueue])

    const showNotification = useCallback((message: string) => {
        setNotificationQueue(prevQueue => [...prevQueue, message])
    }, [])

    const handleNotificationEnd = useCallback(() => {
        setCurrentNotification(null)
    }, [])

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRoleFilter(event.target.value)
    }

    const handleDateStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateFilterStart(event.target.value)
    }

    const handleDateEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateFilterEnd(event.target.value)
    }

    const filteredUsers = users.result?.filter(user => {
        return (roleFilter ? user.role === roleFilter : true) &&
            (dateFilterStart ? new Date(user.creation_time) >= new Date(dateFilterStart) : true) &&
            (dateFilterEnd ? new Date(user.creation_time) <= new Date(dateFilterEnd) : true)
    })

    return (
        <div className='user-list'>
            <Notification message={currentNotification} onEnd={handleNotificationEnd} />
            <div className='filter-bar'>
                <select value={roleFilter} onChange={handleRoleChange}>
                    <option value=''>Фильтр по роли</option>
                    <option value='Администратор'>Администратор</option>
                    <option value='Редактор'>Преподаватель</option>
                    <option value='Студент'>Студент</option>
                </select>
                <input type='date' value={dateFilterStart} onChange={handleDateStartChange} />
                <input type='date' value={dateFilterEnd} onChange={handleDateEndChange} />
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>UID</th>
                            <th>Электронная почта</th>
                            <th>ФИО</th>
                            <th>Номер телефона</th>
                            <th>Дата создания</th>
                            <th>Последний вход</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers?.map(user => (
                            <tr key={user.uid}>
                                <td>{user.uid}</td>
                                <td>{user.email}</td>
                                <td>{user.display_name}</td>
                                <td>{user.phone_number}</td>
                                <td>{new Date(user.creation_time).toLocaleDateString()}</td>
                                <td>{new Date(user.last_sign_in_time).toLocaleDateString()}</td>
                                <td>
                                    <button className='edit-btn'>✎</button>
                                    <button className='delete-btn'>✕</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList