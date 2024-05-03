import { useState, ChangeEvent, FocusEvent, useEffect, useCallback } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import './Auth.scss';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [notificationQueue, setNotificationQueue] = useState<string[]>([]);
    const [currentNotification, setCurrentNotification] = useState<string | null>(null);
    const [notificationClass, setNotificationClass] = useState('hide');
    const notificationTimeout = 3000; // 3 секунды для отображения уведомления

    useEffect(() => {
        setFormValid(!emailError && !passwordError);
    }, [emailError, passwordError]);

    const showNotification = useCallback((message: string) => {
        setNotificationQueue(prevQueue => [...prevQueue, message]);
    }, []);

    useEffect(() => {
        if (currentNotification === null && notificationQueue.length > 0) {
            const message = notificationQueue.shift()!;
            setCurrentNotification(message);
            setNotificationClass('show');
            setTimeout(() => {
                setNotificationClass('hide');
                setTimeout(() => {
                    setCurrentNotification(null);
                }, 500);
            }, notificationTimeout);
        }
    }, [currentNotification, notificationQueue]);

    const validateEmail = (email: string) => {
        const re =
            /^(([^<>()[\]\.,;:\с@\"]+(\.[^<>()[\]\.,;:\с@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\с@\"]+\.)+[^<>()[\]\.,;:\с@\"]{2,})$/i;
        if (!email) {
            return 'Email не может быть пустым';
        } else if (!re.test(email.toLowerCase())) {
            return 'Некорректный email';
        } else {
            return '';
        }
    };

    const validatePassword = (password: string) => {
        if (!password) {
            return 'Пароль не может быть пустым';
        } else if (password.length < 3 || password.length > 20) {
            return 'Пароль должен быть длиннее 3 и меньше 20';
        } else {
            return '';
        }
    };

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const blurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        let error = "";
        switch (e.target.name) {
            case 'email':
                error = validateEmail(email);
                setEmailError(error);
                break;
            case 'password':
                error = validatePassword(password);
                setPasswordError(error);
                break;
        }

        if (error) {
            showNotification(error);
        }
    };

    return (
        <div className="container">
            {currentNotification && (
                <div className={`notification-alert ${notificationClass}`}>
                    {currentNotification}
                </div>
            )}

            <motion.div
                className="toggle-container"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>С возвращением!</h1>
                        <p>Введите логин и пароль для входа в Админ-панель IQJ</p>
                    </div>
                </div>
            </motion.div>

            <div className="form-container sign-in">
                <form>
                    <h1>Войти</h1>
                    <input
                        onChange={(e) => emailHandler(e)}
                        value={email}
                        onBlur={(e) => blurHandler(e)}
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => passwordHandler(e)}
                        value={password}
                        onBlur={(e) => blurHandler(e)}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                    />
                    <a href="#">Забыли пароль?</a>
                    <button disabled={!formValid} type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
