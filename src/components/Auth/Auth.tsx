import React, {useState} from 'react';
import '../../assets/css/Auth.css'

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={`container ${isLogin ? 'active' : ''}`} id="container" >
            <div className="form-container sign-in">
                <form>
                    <h1>Войти</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Пароль"/>
                    <a href="#">Забыли пароль?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>С возвращением!</h1>
                        <p>Введите логин и пароль для входа в Админ-панель IQJ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;