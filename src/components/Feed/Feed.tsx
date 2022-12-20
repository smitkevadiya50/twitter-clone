import React from 'react'
import '../../css/Feed/Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
export default function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox/>
      {/* Post */}
      <Post avatar="https://avatars.githubusercontent.com/u/76934359?v=4" displayName="Akash" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nlqKdxw5oLVnmpReosfx2JSdiLnrle-sg&usqp=CAU"} 
      text="This is my First tweet useing the Tweet Clone design by Smit Kevadiya."
      userName={"@akash007"} verified= {true} />
      <Post avatar="https://avatars.githubusercontent.com/u/76934359?v=4" displayName="SD" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nlqKdxw5oLVnmpReosfx2JSdiLnrle-sg&usqp=CAU"} 
      text="This is my First tweet useing the Tweet Clone design by SG."
      userName={"@sd0516"} verified= {true} />
      <Post avatar="https://avatars.githubusercontent.com/u/76934359?v=4" displayName="Bhagavat" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nlqKdxw5oLVnmpReosfx2JSdiLnrle-sg&usqp=CAU"} 
      text="This is my First tweet useing the Tweet Clone design by SG."
      userName={"@bhagavat101"} verified= {true} />
      <Post avatar="https://avatars.githubusercontent.com/u/76934359?v=4" displayName="Esha" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nlqKdxw5oLVnmpReosfx2JSdiLnrle-sg&usqp=CAU"} 
      text="This is my First tweet useing the Tweet Clone design by SG."
      userName={"@esha4512"} verified= {true} />
    </div>
  )
}
