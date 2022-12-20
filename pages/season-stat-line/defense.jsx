import { withSSRContext } from 'aws-amplify';
import PlayerStats from '../../components/player-stats';
import { listPlayers } from '../../src/graphql/queries';


const DefenseStatLines = ({ players = []}) => {
    return (
        <div className='get-seasonal-stat-line flex'>
            <div className='seasonal-stat-list flex-1'>
                <PlayerStats playerStatList={players} />
            </div>
        </div>
    )
}


export const getServerSideProps = async ({ req }) => {
    const SSR = withSSRContext({ req })

    const { data } = await SSR.API.graphql({ query: listPlayers });
    const defense = data.listPlayers.items.filter(player => player.position === 'D')
    
    return {
        props: {
            players: defense
        }
    }
};

export default DefenseStatLines;
