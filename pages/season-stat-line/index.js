import { withSSRContext } from 'aws-amplify';
import { useEffect, useState } from 'react';
import PlayerStats from '../../components/PlayerStats';
import { listPlayers } from '../../src/graphql/queries';
import { deletePlayerById, getAllPlayers, getAllSeasonStats, updatePlayerRow } from '../../utils/load';

const GetSeasonalStatLines = ({ players = []}) => {

    const connectPlayerToStats = (player, seasonalStat) => {
        player["seasonalStatLineId"] = seasonalStat.id;
        // player["seasonalStatLine"] = seasonalStat;
        console.log(player)
        updatePlayerRow(player)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error);
        });
    }

    const onSetSelectPlayer = (player) => {
        setSelectedPlayer(player);
    };

    const onSetSelectStat = (stat) => {
        setSelectedStat(stat);
    };

    return (
        <div className='md:container md:mx-auto get-seasonal-stat-line container flex'>
            <div className='p-6 seasonal-stat-list flex-1'>
                <PlayerStats playerStatList={players} />
            </div>
        </div>
    )
}


export const getServerSideProps = async ({ req }) => {
    const SSR = withSSRContext({ req })

    const { data } = await SSR.API.graphql({ query: listPlayers });

    return {
        props: {
            players: data.listPlayers.items
        }
    }
};

export default GetSeasonalStatLines;
