import './closeFriends.css'

export default function CloseFriends({ user }) {

    return (
        <li className='sidebarFriendListItem'>
            <img src={user.profilePicture} alt="me" className="sidebarFriendImage" />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    )
}