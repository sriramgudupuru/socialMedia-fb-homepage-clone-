import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
export default function Topbar() {
    return (
        <div className='topBarContainer'>
            <div className="topBarLeft">
                <span className='logo'>SriSocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input placeholder='Seach here' className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">HomePage</span>
                    <span className="topBarLink">TimeLine</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        < Person />
                        <span className="topBarIconBadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        < Chat />
                        <span className="topBarIconBadge">2</span>
                    </div>
                    <div className="topBarIconItem">
                        < Notifications />
                        <span className="topBarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/Persons/pspk.jpeg" alt="pspk" className="topBarImg" />
            </div>
        </div>
    )
}