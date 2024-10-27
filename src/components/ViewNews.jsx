import React, { useContext, useEffect, useState } from 'react'
import newsContext from '../context/NewsContext';
import NewsImage from '../assets/news.jpeg'
import Loader from './Loader';
import NewsCart from './NewsCart';

export default function ViewNews() {

    const { news, id ,toggle} = useContext(newsContext);
    const [newsData, setNewsData] = useState(null)
    const [newsFeed, setNewsFeed] = useState(null);

    useEffect(() => {
        if (news){
            setNewsData(news.articles[id]);
            const filteredNews = news.articles.filter((item, index) => index !== id);
            setNewsFeed(filteredNews);
        }

    }, [id,news])

    return (
        <>
            {
                newsData ?
                    <div className='container-fluid mt-5'>
                        <div className='row mt-5'>
                            <div className={`mt-3 mb-3 col-sm-12 col-md-8 col-xl-8 col-xxl-8 fixed-div text-${toggle==='light'?'dark':'white'}`}  bg={toggle}>
                                <img src={newsData.urlToImage ? newsData.urlToImage : NewsImage} className='customNewsImg ml-5 mt-5' />
                                <h1 className='mt-1 text-start head'>
                                    {newsData.title === '[Removed]'?'Breaking News':newsData.title}
                                </h1>
                                <h3 className='mt-3 text-[15px] text-start font-medium text-wrap italic mb-1'>
                                    Source: {newsData.source.name === '[Removed]'?'Unknown':newsData.source.name}
                                </h3>
                                <h5 className='mt-3 mb-2 italic text-start'>
                                    Published At:{newsData.publishedAt}
                                </h5>
                                <p className='mt-3 mb-5 text-[20px] text-start font-semibold text-pretty'>
                                    {newsData.description === '[Removed]'?import.meta.env.VITE_DESCRIPTION:newsData.description}
                                    <br/>
                                    <br/>
                                    {newsData.content === '[Removed]'?'':newsData.content && newsData.content.replace(/(\.\.\.|…)\s*\[\+\d+\s+chars\]/, '')}
                                </p>
                            </div>
                            <div className='col-sm-12 col-md-4 col-xl-4 col-xxl-4 mt-2 mb-3 scrollable-div' bg={toggle} data-bs-theme={toggle}>
                                {
                                   newsFeed && newsFeed.map((newsInfo,pos)=>{
                                       return <NewsCart key={`${newsInfo.url}-${pos}`} newsInfo={newsInfo} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <Loader />
            }

        </>
    )
}
