import React, { useState } from 'react';
import agoraStatesDiscussions from "./data.js";
import Post from "./post.js"



const Posts = () => {


    let postPerPage = 10;
    let postCount = agoraStatesDiscussions.length;
    let pageCount = Math.ceil(postCount/postPerPage);
    let pages = [];
    for (let i = 1; i < pageCount + 1; i++) {
        pages.push(i);
    }
    const[pageState,setPageState] = useState(1);
    const[frontBack, setFrontBack] = useState(null);

    const handlePageClick = event => {
        setPageState(event.target.textContent);
    } 

    const frontOrBack = event => {
        if(event.target.textContent === "<" && pageState > 1){
            setPageState(pageState - 1);
        }
        else if(event.target.textContent === ">" && pageState < pages.length){
            setPageState(pageState + 1);
        }
    }
   


    return (
        <div>
            {pageState?
                (<div className = "posts">{agoraStatesDiscussions.slice((pageState-1)*postPerPage, pageState * postPerPage).map((post) => <Post data = {post}/>)}
                {`total post count: ${agoraStatesDiscussions.length}`}</div>)
                :null

            }
            <div className='pageIcons'>
                <button className={`button<`} onClick={frontOrBack}>{"<"}</button>
                {pages.map((element) => <button className={`button${element}`} onClick={handlePageClick}>{element}</button>)}
                <button className={`button>`} onClick={frontOrBack}>{">"}</button>

            </div>
        </div>  
    )
}



export default Posts;
