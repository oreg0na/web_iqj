import {useState, ChangeEvent, FocusEvent, useEffect} from 'react'
import React from 'react'
import {motion} from 'framer-motion'
import './Auth.scss'

const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 20){
            setPasswordError('Пароль должен быть длиннее 3 и меньше 20')
            if(!e.target.value){
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    return (
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
                <form>
                    <h1>Войти</h1>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='email' placeholder='Email' />
                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль' />
                    <a href='#'>Забыли пароль?</a>
                    <button disabled={!formValid} type='submit'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
