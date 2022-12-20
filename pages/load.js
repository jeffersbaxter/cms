import { Amplify, API } from 'aws-amplify';
import { createPlayer, createSeasonalStatLine, updatePlayer, deletePlayer } from './../src/graphql/mutations';
import { listSeasonalStatLines, getSeasonalStatLine, listPlayers } from './../src/graphql/queries';
import awsExport from '../src/aws-exports';

Amplify.configure({...awsExport, ssr: true});

export const deletePlayerById = async (id) => {
    return await API.graphql({
        query: deletePlayer,
        variables: {
            input: {
                id: id
            }
        }
    })
}

export const createNewPlayer = async (player) => {
    const {
        firstName,
        lastName,
        position,
        shoots
    } = player;
    const seasonalStatLine = {
        assists: player.seasonalStatLine.assists,
        gamesPlayed: player.seasonalStatLine.gamesPlayed,
        goals: player.seasonalStatLine.goals,
        points: player.seasonalStatLine.points
    }
    return await API.graphql({
        query: createPlayer,
        variables: {
            input: {
                "firstName": firstName,
                "lastName": lastName,
                "position": position,
                "shoots": shoots,
                // "seasonalStatLine": seasonalStatLine
            }
        }
    });
}

export const createNewSeasonStatLine = async (seasonalStatLine) => {
    return await API.graphql({
        query: createSeasonalStatLine,
        variables: {
            input: {
                "goals": seasonalStatLine.goals,
                "assists": seasonalStatLine.assists,
                "points": seasonalStatLine.points,
                "gamesPlayed": seasonalStatLine.gamesPlayed
            }
        }
    })
}

export const getAllSeasonStats = async () => {
    return await API.graphql({
        query: listSeasonalStatLines
    });
};

export const getSeasonStat = async (id) => {
    return await API.graphql({
        query: getSeasonalStatLine,
        variables: { id }
    });
};

export const updatePlayerRow = async (player) => {
    if (!player.id) throw new Error('Cannot update player without a valid ID.')

    let updatedPlayer = {
        "id": player.id
    };

    if (player.firstName) {
        updatedPlayer["firstName"] = player.firstName;
    }
    if (player.lastName) {
        updatedPlayer["lastName"] = player.lastName;
    }
    if (player.position) {
        updatedPlayer["position"] = player.position;
    }
    if (player.shoots) {
        updatedPlayer["shoots"] = player.shoots;
    }

    // provide id, Amplify will connect to nested model by id
    if (player.seasonalStatLineId) {
        updatedPlayer["seasonalStatLineId"] = player.seasonalStatLineId;
    }
    console.log(player)
    return await API.graphql({
        query: updatePlayer,
        variables: {
            input: {
                ...updatedPlayer
            }
        }
    })
}

export const getAllPlayers = async () => {
    return await API.graphql({ query: listPlayers });
};