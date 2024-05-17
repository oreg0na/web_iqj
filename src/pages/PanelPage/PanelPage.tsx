import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Menu from '../../components/Menu/Menu'
import EditUser from '../../components/Users/EditUser/EditUser'
import UserList from '../../components/Users/UserList/UserList'
import EditNews from '../../components/News/EditNews/EditNews'
import NewsList from '../../components/News/NewsList/NewsList'
import AddNews from '../../components/News/AddNews/AddNews'
import AdList from '../../components/Ad/AdList/AdList'
import EditAd from '../../components/Ad/EditAd/EditAd'

import SearchIcon from './assets/SearchIcon.svg'
import SettingsIcon from './assets/SettingsIcon.svg'
import TemplateUserIcon from './assets/TemplateUserIcon.jpg'

import './PanelPage.scss'

const PanelPage = () => {

    const navigate = useNavigate()

    return (
        <div className='panel-container'>
            <Menu />
            <div className='panel-content'>
                <div className='top-line'>
                    <div className='search-block'>
                        <div className='search'>
                            <input placeholder='Search' />
                            <img src={SearchIcon} />
                        </div>
                    </div>
                    <div className='user-block'>
                        <div className='settings'>
                            <img src={SettingsIcon} onClick={() => navigate('/panel/user/edit')} />
                        </div>
                        <div className='line'></div>
                        <div className='user'>
                            <span>Pavlichenko A.I.</span>
                            <img src={TemplateUserIcon} />
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route index element={<Navigate to='user' />} />
                    <Route path='user'>
                        <Route index element={<Navigate to='list' />} />
                        <Route path='list' element={<UserList />} />
                        <Route path='edit/:uid' element={<EditUser />} />
                    </Route>
                    <Route path='news'>
                        <Route index element={<Navigate to='list' />} />
                        <Route path='list' element={<NewsList />} />
                        <Route path='edit/:id' element={<EditNews />} />
                        <Route path='add' element={<AddNews />} />
                    </Route>    
                    <Route path='ad'>
                        <Route index element={<Navigate to='list' />} />
                        <Route path='list' element={<AdList />} />
                        <Route path='edit/:id' element={<EditAd />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default PanelPage