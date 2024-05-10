import React, { useEffect } from 'react'
import Login from './pages/Auth/Auth'
import NotFound from './pages/NotFound/NotFound'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import './App.scss'
import { useAppDispatch, useAppSelector } from './store/store'
import { setIsLogin } from './store/slices/dataSlice'
import axios from 'axios'
import UserList from './pages/UserList/UserList'
import EditUser from './pages/EditUser/EditUser'
import NewsList from './pages/NewsList/NewsList'
import EditNews from './pages/EditNews/EditNews'

const App: React.FC = () => {
    const data = useAppSelector(state => state.data)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (['false', null].includes(localStorage.getItem('isLogin'))) {
            dispatch(setIsLogin(false))
        } else {
            dispatch(setIsLogin(true))
            axios.defaults.headers['Authorization'] = localStorage.getItem('token')
        }
    }, [])

    const isNotlogin = (component: JSX.Element, elseUrl: string): JSX.Element => {
        if (data.isLogin) {
            return <Navigate to={elseUrl} />
        } else {
            return component
        }
    }

    const isLogin = (component: JSX.Element, elseUrl: string): JSX.Element => {
        if (data.isLogin) {
            return component
        } else {
            return <Navigate to={elseUrl} />
        }
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'>
                <Route index element={<Navigate to='/login' />} />
                <Route path='/login' element={isNotlogin(<Login />, '/user')} />
                <Route path='/user'>
                    <Route index element={<Navigate to='/user/list' />} />
                    <Route path='/user/list' element={isLogin(<UserList />, '/login')} />
                    <Route path='/user/edit' element={isLogin(<EditUser />, '/login')} />
                </Route>
                <Route path='/news'>
                    <Route index element={<Navigate to='/news/list' />} />
                    <Route path='/news/list' element={isLogin(<NewsList />, '/login')} />
                    <Route path='/news/edit' element={isLogin(<EditNews />, '/login')} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    )

    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
