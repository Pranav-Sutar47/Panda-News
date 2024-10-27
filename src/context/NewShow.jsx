import React,{useState,useEffect} from 'react'
import NewsContext from './NewsContext';

export default function NewShow(props) {

    const [page,setPage] = useState(1);
    const [news,setNews] = useState({articles:[],page:page,totalResult:0});
    const [category,setCategory] = useState('');
    const [id,setId] = useState();
    const [toggle,setToggle] = useState('light');
    const api = String(import.meta.env.VITE_API);

    useEffect(()=>{
        if(toggle==='light'){
          window.document.body.style.backgroundColor='white';
        }
        else{
          window.document.body.style.backgroundColor='black';
        }
      },[toggle])

    const fetchNews = async() =>{
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}&page=${page}&pageSize=20&category=${category}`);
        const datajson = await data.json();
        setNews({
          articles: datajson.articles,
          page: page,
          totalResult: datajson.totalResults
        });
    }



  return (
   <NewsContext.Provider value={{news,setNews,fetchNews,setPage,setCategory,page,id,setId,toggle,setToggle,category}}>
        {props.children}
   </NewsContext.Provider>
  )
}
