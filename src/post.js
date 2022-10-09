import React from 'react';
import './post.css';

const Post = ({data}) => {
    const parsedDate = new Date(data.createdAt).toLocaleDateString('ko-kr');

    return (
        <ul className="post" key = {data.id}>
            <div className = "profile__wrapper">
                <div className= "post__profile">
                    <img className="post__pic" src={data.avatarUrl} alt="img"/>
                </div>
            </div>
            <div className='content__wrapper'>
                <div className = "post__username">
                    {data.author}
                </div>
                <div className = "post__title">
                    {data.title}
                </div>
                <div className = "post__date">
                    {data.createdAt}
                </div>
            </div>
        </ul>
    )
}


export default Post;

