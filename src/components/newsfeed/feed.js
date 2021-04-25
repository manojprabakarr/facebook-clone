import React,{useState,useEffect} from 'react'
import './feed.css'
import Storyreel from './storyReel/storyreel'
import Post from './post'
import Messagesender from './messegesender'
import db from '../../firebase'

function Feed() {
    const[post,setpost]=useState([]);

    useEffect(()=> {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setpost(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })

    },[])
    return (
        <div className="feed">
            <Storyreel/>
            <Messagesender/>
            {post.map(postm => (
      <Post
        key={postm.data.id}
        profilepic={postm.data.profilepic}
        message={postm.data.message}
        timestamp={postm.data.timestamp}
        username={postm.data.username}
        image={postm.data.image}
      />
      ))}
            
        </div>
    )
}

export default Feed
