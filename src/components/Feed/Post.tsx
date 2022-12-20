import React from 'react'
import '../../css/Feed/Post.css'
import Avatar from '@mui/material/Avatar'
import Verified from '@mui/icons-material/Verified'
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/RepartitionOutlined'
import FavoriteICon from '@mui/icons-material/FavoriteBorderOutlined'
import { PublishOutlined } from '@mui/icons-material'

interface Props{
    displayName: String;
    userName: String;
    verified: boolean;
    text:String;
    image:String;
    avatar: String;
}

export default function Post(props: Props) {
  return (
    <div className='post'>
      <div className="post-avatar">
        <Avatar alt='D' src=""></Avatar>
      </div>
      <div className="post-body">
        <div className="post-header">
            <div className="post-header-text">
              <h3>
              {props.displayName} <span><Verified/></span> 
              {props.userName}
              </h3>
            </div>
            <div className="post-header-description">
                <p>{props.text}</p>
            </div>
        </div>
        <img src="https://avatars.githubusercontent.com/u/76934359?v=4" alt="" />
        <div className="post-footer">
            <ChatBubbleIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteICon fontSize='small'/>
            <PublishOutlined fontSize='small'/>
        </div>
      </div>
    </div>
  )
}
