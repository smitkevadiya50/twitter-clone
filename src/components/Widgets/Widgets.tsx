import React from 'react'
import { SearchOutlined } from '@mui/icons-material'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import '../../css/Widgets/Widgets.css'

export default function Widgets() {
  return (
    <div  className='widgets'>
      <div className="widgets-input">
        <SearchOutlined className='widgets-searchIcon'/>
        <input type="text" placeholder='Search Tweets' />
      </div>
      <div className="widgets-widget-container">
        <h2>Whats's happening</h2>
        <TwitterTweetEmbed tweetId={"1563406558154739718"}/>
        <TwitterTweetEmbed tweetId={"1417485720713900045"}/>
      </div>
    </div>
  )
}
