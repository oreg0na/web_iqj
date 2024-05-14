import { useEffect, useState } from 'react'
import {getNews} from '../../../api/news'
import './NewsList.scss'
import { addNotification } from '../../../store/slices/notificationSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import {getUsers} from "../../../api/users";
import NewsIcon from "../../News/NewsList/assets/NewsIcon.svg";
import DownArrowIcon from "../../News/NewsList/assets/DownArrowIcon.svg";
import CalendarIcon from "../../News/NewsList/assets/CalendarIcon.svg";
import SearchIcon from "../../News/NewsList/assets/SearchIcon.svg";
import EditNewsIcon from "../../News/NewsList/assets/EditNewsIcon.svg";
import RemoveNewsIcon from "../../News/NewsList/assets/RemoveNewsIcon.svg";

const NewsList = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const news = useAppSelector(state => state.news)
    const [authorFilter, setAuthorFilter] = useState(false)
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)
    const [authors, setAuthor] = useState<Array<string>>()

    useEffect(() => {
        dispatch(getNews({}))
    }, [])

    useEffect(() => {
        if (news.status === 'failed' && news.error) {
            dispatch(addNotification(news.error))
        }
    }, [news.status])

    useEffect(() => {
        const rolesBuffer: Array<string> = []
        news.result?.forEach(news => {
            if (!rolesBuffer.includes(news.author)) {
                rolesBuffer.push(news.author)
            }
        })
        setAuthor(rolesBuffer)
    }, [news.result])

    return (
        <div className='news-list-container'>
            <div className='title-block'>
                <span className='title'>News List</span>
                <div className='filters-block'>
                    <div onClick={() => setAuthorFilter(true)} className='filter-block'>
                        <div onClick={(e) => {
                            e.stopPropagation()
                            setAuthorFilter(false)
                        }
                        } className={`drop-down-menu ${authorFilter ? '' : 'close'}`}>
                            <div className='filter-block'>
                                <div className='image-block'>
                                    <img src={NewsIcon}/>
                                </div>
                                <div className='text-block'>
                                    <span className='title'>Filter by Author</span>
                                </div>
                                <div className='arrow-block'>
                                    <img src={DownArrowIcon}/>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='filter-items'>
                                {
                                    authors?.map((role) =>
                                        <span
                                            onClick={() => setSelectedAuthor(role === selectedAuthor ? null : role)}>{role}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div className='image-block'>
                            <img src={NewsIcon}/>
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by Author</span>
                        </div>
                        <img className='arrow-image' src={DownArrowIcon}/>
                    </div>
                    <div className='filter-block'>
                        <div className='image-block'>
                            <img src={CalendarIcon}/>
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by publication date</span>
                            <span className='text'>April 17, 2024 - May 21, 2024</span>
                        </div>
                        <img className='arrow-image' src={DownArrowIcon}/>
                    </div>
                </div>
            </div>
            <div className='search'>
                <img src={SearchIcon}/>
                <input placeholder='ID, Title, Tags...'/>
            </div>
            <div className='table-block'>
                <button className='search-button'>Search</button>
                <button className='addnews-button' onClick={() => navigate('/panel/news/add')}>Add News</button>
                <table>
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Heading</td>
                        <td>Date of publication</td>
                        <td>Tags</td>
                        <td>Institute</td>
                        <td>Author</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Халява для студентов</td>
                        <td>01.09.2024</td>
                        <td>ИПТИП, ХАЛЯВА, ВЕСНА2024</td>
                        <td>ИПТИП, ИРИ, ИКБ, бла бла</td>
                        <td>superabdul</td>
                        <td>
                            <div className='actions-block'>
                                <img src={EditNewsIcon} onClick={() => navigate('/panel/news/edit')}/>
                                <img src={RemoveNewsIcon}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Халява для студентов</td>
                        <td>01.09.2024</td>
                        <td>ИПТИП, ХАЛЯВА, ВЕСНА2024</td>
                        <td>ИПТИП, ИРИ, ИКБ, бла бла</td>
                        <td>superabdul</td>
                        <td>
                            <div className='actions-block'>
                                <img src={EditNewsIcon} onClick={() => navigate('/panel/news/edit')}/>
                                <img src={RemoveNewsIcon}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Халява для студентов</td>
                        <td>01.09.2024</td>
                        <td>ИПТИП, ХАЛЯВА, ВЕСНА2024</td>
                        <td>ИПТИП, ИРИ, ИКБ, бла бла</td>
                        <td>superabdul</td>
                        <td>
                            <div className='actions-block'>
                                <img src={EditNewsIcon} onClick={() => navigate('/panel/news/edit')}/>
                                <img src={RemoveNewsIcon}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Халява для студентов</td>
                        <td>01.09.2024</td>
                        <td>ИПТИП, ХАЛЯВА, ВЕСНА2024</td>
                        <td>ИПТИП, ИРИ, ИКБ, бла бла</td>
                        <td>superabdul</td>
                        <td>
                            <div className='actions-block'>
                                <img src={EditNewsIcon} onClick={() => navigate('/panel/news/edit')}/>
                                <img src={RemoveNewsIcon}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Халява для студентов</td>
                        <td>01.09.2024</td>
                        <td>ИПТИП, ХАЛЯВА, ВЕСНА2024</td>
                        <td>ИПТИП, ИРИ, ИКБ, бла бла</td>
                        <td>superabdul</td>
                        <td>
                            <div className='actions-block'>
                                <img src={EditNewsIcon} onClick={() => navigate('/panel/news/edit')}/>
                                <img src={RemoveNewsIcon}/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NewsList