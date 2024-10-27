import React, { useContext, useEffect, useState } from 'react'
import newsContext from '../context/NewsContext';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import NewsImg from '../assets/news.jpeg'
import { useNavigate } from 'react-router-dom';


export default function NewsItem({index}) {

    const {news,setId,toggle} = useContext(newsContext);
    const [newsItem,setNewsItem] = useState(null)
    const navigate = useNavigate();

    const handleClick = ()=>{
        setId(index);
        navigate('/news');
    }

    useEffect(()=>{
        if(news.articles && news.articles[index]){
          setNewsItem(news.articles[index])
        }
    },[news,index])

  return (
    <>
        {
            newsItem && (<div className='col-12 col-md-6 col-lg-3 col-xl-3 mt-3 mb-2'>
                <Card className='m-0 p-0 card' bg={toggle} data-bs-theme={toggle}>
                  <Card.Img variant="top" src={newsItem.urlToImage?newsItem.urlToImage: NewsImg} className='customImg mt-1' />
                  <Card.Body>
                    <Card.Title className='customTitle'>{newsItem.title==='[Removed]'?'Breaking News':newsItem.title}</Card.Title>
                    <Card.Title className='customSource'>Source : {newsItem.source.name==='[Removed]'?'Unknown':newsItem.source.name}</Card.Title>
                    <Card.Text className='customDes'>
                      {newsItem.description==='[Removed]'?'Breaking News':newsItem.description}
                    </Card.Text>
                    <div>
                      <Button className='btn m-1' onClick={handleClick}>Read More</Button>
                    </div>
          
                  </Card.Body>
                </Card>
              </div>
            )}
    </>
    
  )
}
