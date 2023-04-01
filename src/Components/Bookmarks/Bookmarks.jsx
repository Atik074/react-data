import React, { useEffect, useState } from 'react';
import './Bookmark.css'

const Bookmarks = ({readData , bookmark}) => {

  const [times, settimes] =useState(0)
   useEffect(()=>{
    const getspendtimes= localStorage.getItem('spendtimes')
    settimes(getspendtimes)
   },[readData])
  
    return (
    <div className='tt'>
    
      <div className='border fs-5  ms-3 p-2 rounded spend-part'>
           <p className='text-primary'>Spend time on read: {times}   min</p>
        </div>

     <div className='border  ms-3 mt-3 p-3 rounded bookmark-part'>
        <h5 className="border w-100 fs-5 p-2 bg-white rounded" >Bookmarked Blogs: {bookmark.length}</h5>

         {
          bookmark.map(bookmarkItem =><p className="border fs-5 p-2 bg-white rounded" key={bookmarkItem.id}>{bookmarkItem .title}</p>)
        }
        </div> 
              
    </div>
       
    );
};

export default Bookmarks;