import React from 'react'
import Avatar from '@mui/material/Avatar'
import '../../css/Feed/TweetBox.css'

function TweetBox() {
  return (
    <div className='tweet-box'>
      <form>
        <div className="tweet-box-input">
        <Avatar alt="Smit" src="https://avatars.githubusercontent.com/u/76934359?v=4" />
        <input type="text" className='tweet-input' placeholder="What's happening"/>
        </div>
        <input type="text" className='tweet-image-input' placeholder="Optional: Image URL..."/>
        <button className='tweet-box-button'>Tweet</button>
    </form>
    </div>
  )
}

export default TweetBox
