import React from 'react'
import Menu from '../../components/Menu/Menu'
import { Navigate, Route, Routes } from 'react-router-dom'

import UserList from '../../components/Users/UserList/UserList'
import EditUser from '../../components/Users/EditUser/EditUser'

import NewsList from '../../components/News/NewsList/NewsList'
import EditNews from '../../components/News/EditNews/EditNews'

import EditAd from '../../components/Ad/EditAd/EditAd'
import AdList from '../../components/Ad/AdList/AdList'

import SettingsIcon from './assets/SettingsIcon.svg'
import TemplateUserIcon from './assets/TemplateUserIcon.jpg'
import SearchIcon from './assets/SearchIcon.svg'

import './PanelPage.scss'

const PanelPage = () => {
    return (
        <div className='panel-container'>
            <Menu />
            <div className='panel-content'>
                <div className='top-line'>
                    <div className='search-block'>
                        <div className='search'>
                            <input placeholder='Поиск'/>
                            <img src={SearchIcon} />
                        </div>
                    </div>
                    <div className='user-block'>
                        <div className='settings'>
                            <img src={SettingsIcon} />
                        </div>
                        <div className='line'></div>
                        <div className="user">
                            <span>Павличенко А.И.</span>
                            <img src={TemplateUserIcon} />
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route index element={<Navigate to='user' />} />
                    <Route path='user'>
                        <Route index element={<Navigate to='list' />} />
                        <Route path='list' element={<UserList />} />
                        <Route path='edit' element={<EditUser />} />
                    </Route>
                    <Route path='news'>
                        <Route index element={<Navigate to='list' />} />
                        <Route path='list' element={<NewsList />} />
                        <Route path='edit' element={<EditNews />} />
                    </Route>
                    <Route path='ad'>
                        <Route index element={<Navigate to='list' />} />
                        <Route path='list' element={<AdList />} />
                        <Route path='edit' element={<EditAd />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default PanelPage