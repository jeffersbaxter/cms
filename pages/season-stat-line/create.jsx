import { useState } from 'react'
import { createNewSeasonStatLine } from '../../utils/load'
// import playerData from '../playerData.json'

const CreateSeasonalStatLine = () => {
    const [createdData, setCreatedData] = useState(false)
    const loadStatData = () => {
        // TODO: player data json with season stats
    }
    return (
        <div className='create-seasonal-stat-line container'>
            <p>{createdData ? '✅ Created Data!' : 'No data has been imported.'}</p>
            <button onClick={loadStatData}>Load Seasonal Stats</button>
        </div>
    )
}

export default CreateSeasonalStatLine;
