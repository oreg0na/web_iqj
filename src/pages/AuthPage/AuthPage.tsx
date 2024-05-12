import { motion } from 'framer-motion'
import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../api/auth'
import { addNotification } from '../../store/slices/notificationSlice'
import { AppDispatch, useAppSelector } from '../../store/store'
import './AuthPage.scss'

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useAppSelector(state => state.auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (auth.status === 'failed' && auth.error) {
            dispatch(addNotification(auth.error))
        }
    }, [auth.status])

    useEffect(() => {
        setFormValid(!emailError && !passwordError)
    }, [emailError, passwordError])

    const validateEmail = (email: string) => {
        const re =
            /^(([^<>()[\]\.,:\с@\']+(\.[^<>()[\]\.,:\с@\']+)*)|(\'.+\'))@(([^<>()[\]\.,:\с@\']+\.)+[^<>()[\]\.,:\с@\']{2,})$/i
        if (!email) {
            return 'Email не может быть пустым'
        } else if (!re.test(email.toLowerCase())) {
            return 'Некорректный email'
        } else {
            return ''
        }
    }

    const validatePassword = (password: string) => {
        if (!password) {
            return 'Пароль не может быть пустым'
        } else if (password.length < 3 || password.length > 20) {
            return 'Пароль должен быть длиннее 3 и меньше 20'
        } else {
            return ''
        }
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const blurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        let error = ''
        switch (e.target.name) {
            case 'email':
                error = validateEmail(email)
                setEmailError(error)
                break
            case 'password':
                error = validatePassword(password)
                setPasswordError(error)
                break
        }

        if (error) {
            dispatch(addNotification(error))
        }
    }

    const loginHandler = () => {
        dispatch(login({
            email, password
        }))
    }

    return (
        <div className='auth-page'>
            <div className='container'>
                <motion.div
                    className='toggle-container'
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>С возвращением!</h1>
                            <p>Введите логин и пароль для входа в Админ-панель IQJ</p>
                        </div>
                    </div>
                </motion.div>

                <div className='form-container sign-in'>
                    <div className='sing-in-form'>
                        <h1>Аутентификация</h1>
                        <input
                            onChange={(e) => emailHandler(e)}
                            value={email}
                            onBlur={(e) => blurHandler(e)}
                            name='email'
                            type='email'
                            placeholder='Электронная почта'
                        />
                        <input
                            onChange={(e) => passwordHandler(e)}
                            value={password}
                            onBlur={(e) => blurHandler(e)}
                            name='password'
                            type='password'
                            placeholder='Пароль'
                        />
                        <a href='#'>Забыли пароль?</a>
                        <button disabled={!formValid} onClick={loginHandler}>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
