import React from 'react'
import { motion } from 'framer-motion'
import './Auth.scss'

const Login: React.FC = () => {
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
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Пароль' />
                    <a href='#'>Забыли пароль?</a>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
