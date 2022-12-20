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
        <TwitterTweetEmbed tweetId={"1508838714180612100"}/>
        <TwitterTweetEmbed tweetId={"1601328677677338624"}/>
      </div>
    </div>
  )
}
