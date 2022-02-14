import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Logo</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                  <NotificationsIcon/>
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <GTranslateIcon/>
                <span className="topIconBadge">3</span>
                </div>
                <div className="topbarIconContainer">
                  <SettingsIcon/>
                <span className="topIconBadge">1</span>
                </div>
                <img src="http://cv.sendym.xyz/assets/img/hero-bg.jpg" className="topAvatar"></img>
            </div>
        </div>
    </div>
  )
}
