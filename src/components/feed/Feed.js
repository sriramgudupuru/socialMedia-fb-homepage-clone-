import Post from '../post/post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../Data'
export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />

                {Posts.map((post) => {
                    return <Post key={post.id} post={post} />
                }
                )
                }

            </div>
        </div>
    )
}