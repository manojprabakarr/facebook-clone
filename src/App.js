import React from 'react'
import './app.css'

import Login from './components/login'
import Header from './components/header'
import Sidebar from './components/sidebar/sidebar'
import Widget from './components/widgets/widget'
import Feed from './components/newsfeed/feed'
import {Usestatevalue} from './stateprovider'


function App() {
  const [{user},dispatch]=Usestatevalue();
  return (
    <div className="app">
      {!user ?( 
      <Login/>
      ) :(
        <>
        <Header/>
         <div className="app_body">
        
         <Sidebar/>
         <Feed/>
         <Widget/>
        
        
    
         </div>
         </>
        
      )}
    
    
     
      
     
    </div>
  );
}

export default App;
