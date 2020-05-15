import React from 'react'
import './Ball.css'

export default function Ball(props) {
    
    const style= {
        top: `${props.coor.x * 8}px`,
        left: `${props.coor.y * 8}px`
    }

    return (
        <div className='ballContainer' style={style}>
            <div className='ballImg'/>
        </div>
        
    )
}
