import React, { useContext, useEffect, useState } from 'react'
import newsContext from '../context/NewsContext';
import NewsItem from './NewsItem';
import Loader from './Loader';
import Button from 'react-bootstrap/esm/Button';
import {motion} from 'framer-motion'

function News({cat}) {

  const {news,setPage,setCategory,fetchNews,page,category} = useContext(newsContext);
  const [loading,setLoading] = useState(false);
  const [track,setTrack] = useState(false);

  // Whenever category is changed change page to 1 also
  useEffect(()=>{
    setCategory(cat);
    setPage(1);
  },[cat])

  //whenever category change or page change fetch new News
  useEffect(()=>{
    setLoading(true);
    setTrack(true);
    
    if(news.articles.length<1 || track)
      fetchNews();
    setLoading(false);
  },[page,category]);
  
  const previousClick = () =>{
    setPage(page-1);
  }

  const nextClick = () =>{
    setPage(page+1);
  }

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
    {
      loading?(
        <Loader/>
      ):(
        <>
        <div className='row mt-5'>
      {
        (news.articles && news.articles.length>0)?(
          news.articles.map((article,index)=>(
            <NewsItem key={`${article.url}-${index}`} index={index}/>
        ))
        ):
        (
          <Loader/>
        )
          
      }
    </div>
    <div className='d-flex'>
      <Button variant='secondary' className='btn' disabled={page===1} onClick={previousClick}>Previous</Button>
      <Button variant='success' className='ms-auto' onClick={nextClick} disabled={page * 20 >= news.totalResult}>Next</Button>
    </div>
    </>
      )
    }
    
    </motion.div>
  )
}

export default News
