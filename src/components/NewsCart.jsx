import React, { useContext } from 'react'
import Image from '../assets/news.jpeg'
import newsContext from '../context/NewsContext';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
export default function NewsCart({newsInfo}) {
    
    const {setId,news,toggle} = useContext(newsContext);
    const navigate = useNavigate();

    const handleNews = () =>{
        let i;
        for(i=0;i<news.articles.length;i++){
            if(news.articles[i].title===newsInfo.title){
                setId(i);
                break;
            }
        }
        navigate('/news',{replace: true});
    }

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        className="card mt-2 hover:cursor-pointer" style={{height:'fit-content'}} onClick={handleNews} bg={toggle}>
            <div className="row g-0">
                <div className="col-md-4 col-xl-4 col-sm-4 col-4">
                    <img src={newsInfo.urlToImage?newsInfo.urlToImage:Image} className="img-fluid rounded-start mt-3" alt="..."
                    style={{height:'80%',objectFit:'cover'}}/>
                </div>
                <div className="col-md-8 col-xl-8 col-sm-8 col-8">
                    <div className="card-body">
                        <h5 className="card-title">{newsInfo.title==='[Removed]'?'Breaking News':newsInfo.title}</h5>
                        <p className="card-text">Source : {newsInfo.source.name==='[Removed]'?'Unknown':newsInfo.source.name}</p>
                        <p className="card-text"><small className="text-muted">{newsInfo.publishedAt}</small></p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
