import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../../../api/users'
import { addNotification } from '../../../store/slices/notificationSlice'
import { useAppDispatch, useAppSelector } from '../../../store/store'

import moment from 'moment'

import CalendarIcon from './assets/CalendarIcon.svg'
import DownArrowIcon from './assets/DownArrowIcon.svg'
import EditUserIcon from './assets/EditUserIcon.svg'
import RemoveUserIcon from './assets/RemoveUserIcon.svg'
import SearchIcon from './assets/SearchIcon.svg'
import UserIcon from './assets/UserIcon.svg'

import './UserList.scss'

const UserList: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const users = useAppSelector(state => state.users)
    const [roles, setRoles] = useState<Array<string>>()
    const [selectedRole, setSelectedRole] = useState<string | null>(null)
    const [roleFilter, setRoleFilter] = useState(false)
    const [search, setSearch] = useState<string | null>(null)

    useEffect(() => {
        dispatch(getUsers({}))
    }, [])

    useEffect(() => {
        if (users.status === 'failed' && users.error) {
            dispatch(addNotification(users.error))
        }
    }, [users.status])

    useEffect(() => {
        const rolesBuffer: Array<string> = []
        users.result?.forEach(user => {
            if (!rolesBuffer.includes(user.role)) {
                rolesBuffer.push(user.role)
            }
        })
        setRoles(rolesBuffer)
    }, [users.result])

    return (
        <div className='user-list-container'>
            <div className='title-block'>
                <span className='title'>Users list</span>
                <div className='filters-block'>
                    <div onClick={() => setRoleFilter(true)} className='filter-block'>
                        <div onClick={(e) => {
                            e.stopPropagation()
                            setRoleFilter(false)}
                            } className={`drop-down-menu ${roleFilter ? '' : 'close'}`}>
                            <div className='filter-block'>
                                <div className='image-block'>
                                    <img src={UserIcon} />
                                </div>
                                <div className='text-block'>
                                    <span className='title'>Filter by role</span>
                                </div>
                                <div className='arrow-block'>
                                    <img src={DownArrowIcon} />
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='filter-items'>
                                {
                                    roles?.map((role, index) => 
                                        <span key={index} onClick={() => setSelectedRole(role === selectedRole ? null : role)}>{role}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div className='image-block'>
                            <img src={UserIcon}/>
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by role</span>
                        </div>
                        <img className='arrow-image' src={DownArrowIcon}/>
                    </div>
                    <div className='filter-block'>
                        <div className='image-block'>
                            <img src={CalendarIcon} />
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by registration date</span>
                            <span className='text'>April 17, 2024 - May 21, 2024</span>
                        </div>
                        <img className='arrow-image' src={DownArrowIcon} />
                    </div>
                </div>
            </div>
            <div className='search'>
                <img src={SearchIcon}/>
                <input onChange={(e) => setSearch(e.target.value === '' ? null : e.target.value)} placeholder='ID, Last Name, First Name, Patronymic, Login...'/>
            </div>
            <div className='table-block'>
                {/*<button className='search-button'>Search</button>*/}
                <table>
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Names</td>
                        <td>Job title</td>
                        <td>Register date</td>
                        <td>Institute</td>
                        <td>Login</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                    {
                        users.result?.map((user, index) => {
                            if (selectedRole === null || user.role === selectedRole) {
                                let isShow = search == null ? true : false

                                if (search) {
                                    for (const field in user) {
                                        let value = user[field as keyof typeof user]

                                        if (Array.isArray(value)) {
                                            value = value.join(' ')
                                        }

                                        if (typeof value == "string") {
                                            if (user[field as keyof typeof user].includes(search)) {
                                                isShow = true
                                            }
                                        }
                                    }
                                }

                                if (search) {
                                    const searchIndex = parseInt(search)
                                    if (!Number.isNaN(searchIndex)) {
                                        isShow = searchIndex === index + 1 ? true : false
                                    }
                                }

                                if (isShow) {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.display_name}</td>
                                            <td>{user.position}</td>
                                            <td>{moment(user.creation_time).format("YYYY-MM-DD hh:mm:ss")}</td>
                                            <td>{user.institute}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <div className='actions-block'>
                                                    <img src={EditUserIcon} onClick={() => navigate('/panel/user/edit')} />
                                                    <img src={RemoveUserIcon} />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            }
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList