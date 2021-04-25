import React,{useState} from 'react'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './message.css'
import {Usestatevalue} from '../../stateprovider'
import db from '../../firebase'
import firebase from 'firebase'

function Messegesender() {
  const [{user},dispatch]=Usestatevalue();
  const [input, setInput] = useState('');
  const [inputURL, setInputURL] = useState('');

  const Senddata =(e) => {
    e.preventDefault();
    db.collection('posts').add({
      message:input,
      profilepic:user.photoURL,
      image:inputURL,
      username:user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()



    })
    setInput('');
    setInputURL('');
    

  }
    return (
        <div className="messageSender">
        <div className="messageSender__top">
          <Avatar src={user.photoURL}/>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="messageSender__input"
              placeholder="your message"
            />
            <input
              value={inputURL}
              onChange={(e) => setInputURL(e.target.value)}
              type="text"
              placeholder="Image URL (Optional)"
            />
            <button type="submit" onClick={Senddata}>
             click
            </button>
          </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: 'red' }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: 'green' }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: 'orange' }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
        
            
        
    )
}

export default Messegesender
