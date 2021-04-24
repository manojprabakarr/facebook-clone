import React from 'react'
import './siderow.css'
import { Avatar, Icon } from '@material-ui/core';


function Siderow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            { src && <Avatar src={src} />}
      { Icon &&<Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default Siderow
