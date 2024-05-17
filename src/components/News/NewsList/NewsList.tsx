import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteNews, getNews } from '../../../api/news'
import { addNotification } from '../../../store/slices/notificationSlice'
import { useAppDispatch, useAppSelector } from '../../../store/store'

import moment from 'moment'

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
    const news = useAppSelector(state => state.news)

    const [authorFilter, setAuthorFilter] = useState(false)
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)
    const [authors, setAuthor] = useState<Array<string>>()
    const [search, setSearch] = useState<string | null>(null)

    useEffect(() => {
        dispatch(getNews({}))
    }, [])

    useEffect(() => {
        if (news.getNews.status === 'failed' && news.getNews.error) {
            dispatch(addNotification(news.getNews.error))
        }
    }, [news.getNews.status])

    useEffect(() => {
        const rolesBuffer: Array<string> = []
        news.getNews.result?.forEach(news => {
            if (!rolesBuffer.includes(news.author_name)) {
                rolesBuffer.push(news.author_name)
            }
        })
        setAuthor(rolesBuffer)
    }, [news.getNews.result])

    useEffect(() => {
        if (news.createNews.status === 'success' || news.updateNews.status === 'success' || news.deleteNews.status === 'success') {
            dispatch(getNews({}))
        }
        if (news.createNews.status === 'failed' && news.createNews.error) {
            dispatch(addNotification(news.createNews.error))
        }
        if (news.updateNews.status === 'failed' && news.updateNews.error) {
            dispatch(addNotification(news.updateNews.error))
        }
        if (news.deleteNews.status === 'failed' && news.deleteNews.error) {
            dispatch(addNotification(news.deleteNews.error))
        }
    }, [news.createNews.status, news.updateNews.status, news.deleteNews.status])

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
                                    <img alt='News' src={NewsIcon} />
                                </div>
                                <div className='text-block'>
                                    <span className='title'>Filter by Author</span>
                                </div>
                                <div className='arrow-block'>
                                    <img alt='Down arrow' src={DownArrowIcon} />
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
                            <img alt='News' src={NewsIcon} />
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by Author</span>
                        </div>
                        <img alt='Down arrow' className='arrow-image' src={DownArrowIcon} />
                    </div>
                    <div className='filter-block'>
                        <div className='image-block'>
                            <img alt='Calendar' src={CalendarIcon} />
                        </div>
                        <div className='text-block'>
                            <span className='title'>Filter by publication date</span>
                            <span className='text'>April 17, 2024 - May 21, 2024</span>
                        </div>
                        <img alt='Down arrow' className='arrow-image' src={DownArrowIcon} />
                    </div>
                </div>
            </div>
            <div className='search'>
                <img alt='Search' src={SearchIcon} />
                <input onChange={(e) => setSearch(e.target.value === '' ? null : e.target.value)} placeholder='ID, Title, Tags...' />
            </div>
            {
                news.getNews.status !== 'success' ? null :
                    <div className='table-block'>
                        {/*<button className='search-button'>Search</button>*/}
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
                                    news.getNews.result?.map((news, index) => {
                                        if (selectedAuthor === null || news.author_name === selectedAuthor) {
                                            let isShow = search == null ? true : false

                                            if (search) {
                                                for (const field in news) {
                                                    let value = news[field as keyof typeof news]

                                                    if (Array.isArray(value)) {
                                                        value = value.join(' ')
                                                    }

                                                    if (typeof value == "string") {
                                                        if (news[field as keyof typeof news].includes(search)) {
                                                            isShow = true
                                                        }
                                                    }
                                                }
                                            }

                                            if (search) {
                                                const searchIndex = parseInt(search)
                                                if (!Number.isNaN(searchIndex)) {
                                                    isShow = searchIndex === parseInt(news.id) ? true : false
                                                }
                                            }

                                            if (isShow) {
                                                return (
                                                    <tr key={index}>
                                                        <td>{news.id}</td>
                                                        <td>{news.header}</td>
                                                        <td>{moment(news.publication_time).format("YYYY-MM-DD hh:mm:ss")}</td>
                                                        <td>{news.tags.join(' ')}</td>
                                                        <td>ИПТИП</td>
                                                        <td>{news.author_name}</td>
                                                        <td>
                                                            <div className='actions-block'>
                                                                <img alt='Edit news' src={EditNewsIcon} onClick={() => navigate(`/panel/news/edit/${news.id}`)} />
                                                                <img alt='Remove news' src={RemoveNewsIcon} onClick={() => dispatch(deleteNews({
                                                                    id: news.id
                                                                }))} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        }

                                        return null
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default NewsList