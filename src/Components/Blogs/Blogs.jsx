import React, { useEffect, useState } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import Blog from '../SingleBlog/Blog';
import "./Blogs.css"

const Blogs = ({spendtimes, readData}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])

// handle add to bookmark part 
const [bookmark,setbookmark] =useState([])
const handleAddToBookmark =(blog) =>{
    // console.log(blog)
    const newBookMark =[...bookmark , blog]
    setbookmark(newBookMark)
 }

    return (
        <div className='blogs-container'>
         <div className='blogs-section'>
            {blogs.map(blog => <Blog
                     key ={blog.id}
                    blog ={blog}
                    spendtimes ={spendtimes}
                handleAddToBookmark ={handleAddToBookmark}
                  
          ></Blog>)}
            </div>

            <div>
                <Bookmarks 
              readData = { readData}
              bookmark={bookmark}
                ></Bookmarks>
               
            </div>
          
        </div>
    );
} ;

export default Blogs;