import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../Data'
import { useState } from 'react';

export default function Post({ post }) {
    const user = Users.find((u) => u.id === post.userId);
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        isLiked ? setLike(like + 1) : setLike(like - 1)
        setIsLiked(!isLiked);
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">

                        <img src={user.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/like.png" alt="like" onClick={likeHandler} />
                        <img className='likeIcon' src="/heart.png" alt="like" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}