import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
    const [frameData, setFrameData] = useState([])
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)
    const [players, setPlayers] = useState([])

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios
        .get(`http://localhost:8080/gamedata/${idFromBtnClick}/100`)
        .then((res) => {
            setFrameData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [idFromBtnClick])

    useEffect(() => {
        let playerCoor = []
        frameData.forEach((item, i) => {
            for (let j = 1; j <= 30; j++) {
                playerCoor.push({ x: item[`x_${j}`], y: item[`y_${j}`]})
            }
        })
        setPlayers(playerCoor)
    }, [frameData])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => { setId(e.target.value)} }/>
            <button type="button" onClick={handleClick}>fetch data</button>
            <ul>
                {
                    players.map((player,i) => (<li key={i}> {player.x} {player.y} </li>))
                    //players.forEach((el, i) => (<li key={i}> hi</li>))                 
                }
            </ul>
        </div>
    )
}

export default DataFetching
