 import React from "react";
 import axios from "axios";

import { useEffect,useState } from "react";

import "./News.css"

 const News = ({title,img,discription})=>{

    const [news, setNews] = useState([])
   
    ;
        const loadNews = async () =>{
            const response = await axios.get("https://newsapi.org/v2/everything?q=fruit&from=2023-09-07&sortBy=publishedAt&apiKey=dd28cfa9cf73406dbe95670f718ca641");
            console.log(response.data.articles);
           setNews(response.data.articles);
        }
    
        useEffect(() => {
            loadNews()
        }, [])

        console.log(news);

    return(
        <>
        <div>
        
        <div className="main-news-card">  

            { news?.map((newsArticle, index) => {
                    const {title,description,urlToImage} = newsArticle
    
                    return(
                        <>
                       

                         <div className="news-card">
                            <h4 className="news-title">{title}</h4>
                           <img src={urlToImage} alt="" className="news-article-img"/>
                           <p className="news-description">{description}</p>
                            {/* key={index} */}

                         </div>

                        
                         </>
                    )
                })
            }
        </div>
        </div>
       
        </> 
    )
}
export default  News;
