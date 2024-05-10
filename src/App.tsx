import axios from 'axios'
import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './pages/AuthPage/AuthPage'
import NotFound from './pages/NotFound/NotFound'
import PanelPage from './pages/PanelPage/PanelPage'
import { setIsLogin } from './store/slices/dataSlice'
import { useAppDispatch, useAppSelector } from './store/store'

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

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate to='/login' />} />
                <Route path='/login' element={isNotlogin(<Login />, '/panel')} />
                <Route path='/panel/*' element={isLogin(<PanelPage />, '/login')} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
