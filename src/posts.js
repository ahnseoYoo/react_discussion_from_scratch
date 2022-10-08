import React, { useState } from 'react';
import agoraStatesDiscussions from "./data.js";
import Post from "./post.js"



const Posts = () => {


    let postPerPage = 10;
    let postCount = agoraStatesDiscussions.length;
    let pageCount = Math.ceil(postCount/postPerPage);
    let result = [];
    const[pageState,setPageState] = useState(1);

    const handlePageClick = event => {
        setPageState(event.target.textContent);
    } 
   
    for (let i = 1; i < pageCount + 1; i++) {
        result.push(i);
    }

    return (
        <div>
            {pageState?
                (<div className = "posts">{agoraStatesDiscussions.slice((pageState-1)*postPerPage, pageState * postPerPage).map((post) => <Post data = {post}/>)}
                {`total post count: ${agoraStatesDiscussions.length}`}</div>)
                :null

            }
            <div className='pageIcons'>
                <button className={`button<`} onClick={handlePageClick}>{"<"}</button>
                {result.map((element) => <button className={`button${element}`} onClick={handlePageClick}>{element}</button>)}
                <button className={`button>`} onClick={handlePageClick}>{">"}</button>

            </div>
        </div>  
    )
}



export default Posts;
