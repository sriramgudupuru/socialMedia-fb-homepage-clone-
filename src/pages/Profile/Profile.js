import './profile.css'
import Topbar from "../../components/Topbar/Topbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                            <img src="cover.jpg" alt="" className="profileCoverImg" />
                            <img src="assets/Persons/pspk.jpeg" alt="pspk" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">PSPK</h4>
                            <span className="profileInfoDesc">Hi there</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar differentiator />
                    </div>
                </div>

            </div>
        </>
    )
}