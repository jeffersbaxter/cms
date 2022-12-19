import { createNewPlayer } from '../load';
// import playerData from '../playerData.json'

const PlayerCreate = () => {

    const loadPlayerData = () => {
        playerData.map(player => {
            createNewPlayer(player)
                .catch(error => {
                    console.error(error)
                });
        })
    };

    return (
        <>
            <button onClick={loadPlayerData}>Load Player Data</button>
        </>
    )
}

export default PlayerCreate;