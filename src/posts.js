import React, { useState } from 'react';
import agoraStatesDiscussions from "./data.js";
import Post from "./post.js";



const Posts = () => {

    let postPerPage = 10; // 한 페이지에 표시할 글 수
    let postCount = agoraStatesDiscussions.length; // 모든 글 수
    let pageCount = Math.ceil(postCount/postPerPage); // 페이지 수
    let pages = []; // 페이지 아이콘을 렌더링 하기 위한 배열
    for (let i = 1; i < pageCount + 1; i++) { // 페이지 아이콘 배열에 페이지 넘버 푸쉬
        pages.push(i);
    }


    const[pageState,setPageState] = useState(1); //페이지 버튼 뭐 눌렀는지 상태. 디폴트는 1페이지.
    const[content, setContent] = useState("");
    const[username,setUsername] = useState("human_001");
    const[post, setNewPost] = useState(agoraStatesDiscussions);

    const handlePageClick = event => {
        setPageState(event.target.textContent);// 버튼 숫자에 따라 state 바뀜
    }
    
    const writeContent = (event) => {
        setContent(event.target.value);
    }

    const writeUsername = (event) => {
        setUsername(event.target.value);
    }

    const submitNewPost =  (event) => {
        let post = {
            key: agoraStatesDiscussions.length,
            avatarUrl: "https://img.seoul.co.kr/img/upload/2021/05/03/SSI_20210503113234_O2.jpg",
            author: username,
            title: content,
            createdAt: `${new Date()}`,
        }
        let dataArr = [post, ...agoraStatesDiscussions];
        setNewPost(dataArr);
        agoraStatesDiscussions.unshift(post);
        setPageState(1);
        localStorage.setItem('obj', JSON.stringify(dataArr));
    }


    const frontOrBack = event => {

        if(event.target.textContent === ">" && pageState < pages.length){
            setPageState(Number(pageState) + 1); //아니 pageState 맨처음에 그냥 Num타입으로 줬는데 스트링으로 변환됨;; 자동 형변환 킹받네 ㄹㅇ 아무튼 그래서 Number()로 재변환 해줌
        }
        else if(event.target.textContent === "<" && pageState > 1){
            setPageState(Number(pageState) - 1);
        }
    }


    return (
        <div>
            <div className='Posts__newPost'>
                <textarea className='Posts__usernameInput' placeholder='username' defaultValue="human_001" onChange={writeUsername}></textarea>
                <textarea className='Posts__contentInput' placeholder='write something' onChange={writeContent}></textarea>
                <button className='Posts__submit' onClick={submitNewPost}>Submit</button>
            </div>
            <div className='Posts__postList'>

            {pageState? //클릭한 페이지에 따른 조건부 렌더링
                    (<div className = "posts">{agoraStatesDiscussions.slice((pageState-1)*postPerPage, pageState * postPerPage).map((post) => <Post data = {post}/>)}
                    {`total post count: ${agoraStatesDiscussions.length}`}</div>)
                    :null} 

 
            </div>
            <div className='Posts__pageIcons'> {/*페이지 아이콘*/}
                <button className={`button<`} onClick={frontOrBack}>{"<"}</button> {/*뒤로가기*/}
                {pages.map((element) => <button className={`button${element}`} onClick={handlePageClick}>{element}</button>)} {/*숫자*/}
                <button className={`button>`} onClick={frontOrBack}>{">"}</button> {/*앞으로가기*/}

            </div>
        </div>  
    )
}

export default Posts;
