import React, {useState} from 'react'
import Player from '../player/Player'
import './PlayerWindow.css'

export default function PlayerWindow(props) {
    return (
        <div className='gameWindow'>
            <div className='gameImg'/>
            {
                props.players.map((player, i) =>
                    (
                    <div key={i}>
                        <Player coor={player}/>
                    </div>
                    )
                )    
            }
        </div>
    )
}
