import React from 'react'
import '../../css/Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/HomeOutlined'
import Search from '@mui/icons-material/Search'
import Notifications from '@mui/icons-material/NotificationsOutlined'
import MailOutline from '@mui/icons-material/MailOutline'
import BookmarkBorder from '@mui/icons-material/BookmarkBorder'
import ListAlt from '@mui/icons-material/ListAlt'
import PermIdentity from '@mui/icons-material/PermIdentity'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import SidebarOpction from './SidebarOpction';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon/>
      <SidebarOpction name='Home' icon={HomeIcon}/>
      <SidebarOpction name='Explore' icon={Search}/>
      <SidebarOpction name='Notifications' icon={Notifications}/>
      <SidebarOpction name='Messages' icon={MailOutline}/>
      <SidebarOpction name='Bookmarks' icon={BookmarkBorder}/>
      <SidebarOpction name='Lists' icon={ListAlt}/>
      <SidebarOpction name='Profile' icon={PermIdentity}/>
      <SidebarOpction name='More' icon={MoreHoriz}/>
    </div>
  )
}

export default Sidebar
