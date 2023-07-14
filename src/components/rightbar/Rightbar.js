import './rightbar.css'
import { Users } from '../../Data'
import Online from '../online/Online'
export default function Rightbar({ differentiator }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/birthday.jpg" alt="hello" className="birthdayImg" />
                    <span className="birthdayText"><b>Laxman</b> and <b>3 other friends </b>birthdays are today
                    </span>
                </div>
                <img src="/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => <Online key={user.id} user={user} />)}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Hyderabad</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Parvatipuram</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/Persons/me.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sriram Gudupuru</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Persons/flag.jfif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Laxman Patti</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Persons/Sharukh.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Srinu Mudili</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Persons/thor.jfif" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Chris Hemsworth</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="cover.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Maneeswar Mutyala</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="cover.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Srinivas Talapanti</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="ad.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Prasad Bheri</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {differentiator ? <ProfileRightbar /> : <HomeRightbar />}
                {console.log(differentiator)}
            </div>
        </div>
    )
}