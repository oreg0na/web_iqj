import React from 'react'

import './EditUser.scss'
import {useNavigate} from "react-router-dom";

const EditUser: React.FC = () => {
    const navigate = useNavigate()
    enum Institute{

    }

    return (
        <div className='user-edit-container'>
            <div className='title-block'>
                <span className='title'>Editing a user</span>
            </div>
            <div className='input-user-data-container'>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan={4}>
                            {/*    img*/}
                        </td>
                        <td>
                            <input type='email' placeholder='Почта'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='text' placeholder='Фамилия'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='text' placeholder='Имя'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='text' placeholder='Отчество'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='text' placeholder='Институт'/>
                        </td>
                        <td>
                            <input type='text' placeholder='Логин'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EditUser