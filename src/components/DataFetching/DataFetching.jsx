import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PlayerWindow from '../playerWindow/PlayerWindow'

function DataFetching() {
    const [frameData, setFrameData] = useState([])
    const [singleCoorLine, setSingleCoorLine] = useState([])
    const [id, setId] = useState(150000)
    const [idFromBtnClick, setIdFromBtnClick] = useState(150000)

    const handleClick = () => {
        setIdFromBtnClick(id)
    }
    const count = 0

    useEffect(() => {
        axios
        .get(`http://localhost:8080/gamedata/${idFromBtnClick}`)
        .then((res) => {
            setFrameData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [idFromBtnClick])

    useEffect(() => {
        let coor=[]
            coor.push({x: frameData['x'], y: frameData['y']})
            for (let j = 1; j <= 30; j++) {
                coor.push({ x: frameData[`x_${j}`], y: frameData[`y_${j}`]})
            }
        setSingleCoorLine(coor)
    }, [frameData])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => { setId(e.target.value)} }/>
            <button type="button" onClick={handleClick}>fetch data</button>
            <PlayerWindow players={singleCoorLine} />
        </div>
    )
}

export default DataFetching
