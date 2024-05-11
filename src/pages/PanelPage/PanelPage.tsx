import React from 'react'
import Menu from '../../components/Menu/Menu'
import { Navigate, Route, Routes } from 'react-router-dom'

import UserList from '../../components/UserList/UserList'
import EditUser from '../../components/EditUser/EditUser'

import NewsList from '../../components/NewsList/NewsList'
import EditNews from '../../components/EditNews/EditNews'

import EditAd from '../../components/EditAd/EditAd'
import AdList from '../../components/AdList/AdList'

import './PanelPage.scss'

const PanelPage = () => {
    return (
        <div className='panel-container'>
            <Menu />
            <div className='panel-content'>
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