import { useState } from 'react'
import { createNewSeasonStatLine } from '../load'
import playerData from '../playerData.json'

const CreateSeasonalStatLine = () => {
    const [createdData, setCreatedData] = useState(false)
    const loadStatData = () => {
        playerData.map(player => {
            createNewSeasonStatLine(player.seasonalStatLine)
            .catch(error => {
                console.error(error)
            })
            .finally(data => {
                setCreatedData(true);
            })
        })
    }
    return (
        <div className='create-seasonal-stat-line container'>
            <p>{createdData ? '✅ Created Data!' : 'No data has been imported.'}</p>
            <button onClick={loadStatData}>Load Seasonal Stats</button>
        </div>
    )
}

export default CreateSeasonalStatLine;
