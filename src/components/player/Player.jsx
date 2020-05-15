import React, {useState} from 'react'
import './Player.css'

export default function Player(props) {
    
    const style= {
        top: `${props.coor.x * 8}px`,
        left: `${props.coor.y * 8}px`
    }

    return (
        <div className='playerContainer' style={style}>
            <div className='playerImg'/>
            <div className='playerId'>id</div>
        </div>
        
    )
}
