import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getNews } from '../../../api/news'
import { addNotification } from '../../../store/slices/notificationSlice'
import { useAppDispatch, useAppSelector } from '../../../store/store'

import CalendarIcon from "../../News/NewsList/assets/CalendarIcon.svg"
import DownArrowIcon from "../../News/NewsList/assets/DownArrowIcon.svg"
import EditNewsIcon from "../../News/NewsList/assets/EditNewsIcon.svg"
import NewsIcon from "../../News/NewsList/assets/NewsIcon.svg"
import RemoveNewsIcon from "../../News/NewsList/assets/RemoveNewsIcon.svg"
import SearchIcon from "../../News/NewsList/assets/SearchIcon.svg"

import './NewsList.scss'

const NewsList: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const news_state = useAppSelector(state => state.news)
    const [authorFilter, setAuthorFilter] = useState(false)
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)
    const [authors, setAuthor] = useState<Array<string>>()

    useEffect(() => {
        dispatch(getNews({}))
    }, [])

    useEffect(() => {
        if (news_state.status === 'failed' && news_state.error) {
            dispatch(addNotification(news_state.error))
        }
    }, [news_state.status])

    useEffect(() => {
        const rolesBuffer: Array<string> = []
        news_state.result?.forEach(news => {
            if (!rolesBuffer.includes(news.author_name)) {
                rolesBuffer.push(news.author_name)
            }
        })
        setAuthor(rolesBuffer)
    }, [news_state.result])

    return (
        <div className='news-list-container'>
            <div className='title-block'>
                <span className='title'>News List</span>
                <div className='filters-block'>
                    <div onClick={() => setAuthorFilter(true)} className='filter-block'>
                        <div onClick={(e) => {
                            e.stopPropagation()
                            setAuthorFilter(false)
                        }} className={`drop-down-menu ${authorFilter ? '' : 'close'}`}>
                            <div className='filter-block'>
                                <div className='image-block'>
                                    <img src={NewsIcon} />
                                </div>
                                <div className='text-block'>
                                    <span className='title'>Filter by Author</span>
                                </div>
                                <div className='arrow-block'>
                                    <img src={DownArrowIcon} />
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='filter-items'>
                                {
                                    authors?.map((author_name, index) =>
                                        <span key={index} onClick={() => setSelectedAuthor(author_name === selectedAuthor ? null : author_name)}>{author_name}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div className='image-block'>
                            <img src={NewsIcon} />
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by Author</span>
                        </div>
                        <img className='arrow-image' src={DownArrowIcon} />
                    </div>
                    <div className='filter-block'>
                        <div className='image-block'>
                            <img src={CalendarIcon} />
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by publication date</span>
                            <span className='text'>April 17, 2024 - May 21, 2024</span>
                        </div>
                        <img className='arrow-image' src={DownArrowIcon} />
                    </div>
                </div>
            </div>
            <div className='search'>
                <img src={SearchIcon} />
                <input placeholder='ID, Title, Tags...' />
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
                        {
                            news_state.result?.map((news, index) => {
                                if (selectedAuthor === null || news.author_name === selectedAuthor) {
                                    return (
                                        <tr key={index}>
                                            <td>{news.id}</td>
                                            <td>{news.header}</td>
                                            <td>{news.publication_time}</td>
                                            <td>{news.tags}</td>
                                            <td>ИПТИП</td>
                                            <td>{news.author_name}</td>
                                            <td>
                                                <div className='actions-block'>
                                                    <img src={EditNewsIcon} onClick={() => navigate('/panel/news/edit')}/>
                                                    <img src={RemoveNewsIcon}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NewsList