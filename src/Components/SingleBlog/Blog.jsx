import React, { useEffect, useState } from 'react';
import './Blog.css'
import Card from 'react-bootstrap/Card';
import { RxBookmark } from "react-icons/Rx";



const Blog = ({blog,spendtimes, handleAddToBookmark}) => {
 
 const {title,name,picture,pictureMan,date,readTime} = blog

    return (
        <div>
        <Card className='blog shadow'>
           <img src={picture} alt=""/>
           <div className='author'>
             <img src={pictureMan} alt=""/>     
            <div>
                <span className='author-name'>{name}</span><br></br>
                <span className='publish-date'>{date}</span>
            </div>
              <p className='read-time'>{readTime} min read
                 <span className='rxIcon'>
                 <button onClick={()=>{ handleAddToBookmark(blog)}}><RxBookmark/>
                    </button> 
                </span>
               </p>
           </div>  
           <div>
            <h1>{title}</h1>
            <button onClick={
               ()=>{spendtimes(readTime)} 
            } className='fs-5'>Mark as read</button>
           </div>

        </Card>


        </div>
       
    );
};


export default Blog;