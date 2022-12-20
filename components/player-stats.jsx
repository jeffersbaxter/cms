import Image from 'next/image'
import darkAvatarPng from '../public/dark-avatar-lg.png'
import lightAvatarPng from '../public/light-avatar-lg.png'

export const PlayerStat = ({ firstName, lastName, position, seasonalStatLine }) => {
    return (
        <div className='player-card'>
            <div className='player-card-content flex'>
                <div className='flex-1'>
                    <h3><span className='font-bold'>{firstName} {lastName}</span></h3>
                    <div><span className='delimiter'>|</span> {position}</div>
                    <Image src={position === 'C' || position.includes('W') ? darkAvatarPng : lightAvatarPng} alt="Picture of player"/>
                </div>
                <p className='flex-1 grid place-items-center'>
                    <span className='align-middle font-extrabold text-2xl'>{(seasonalStatLine.goals / seasonalStatLine.gamesPlayed).toFixed(2)}</span>
                </p>
                <p className='flex-1 grid place-items-center'>
                    <span className='align-middle font-extrabold text-2xl'>{(seasonalStatLine.assists / seasonalStatLine.gamesPlayed).toFixed(2)}</span>
                </p>
                <p className='flex-1 grid place-items-center'>
                    <span className='align-middle font-extrabold text-2xl'>{(seasonalStatLine.points / seasonalStatLine.gamesPlayed).toFixed(2)}</span>
                </p>
            </div>
            <hr />
        </div>
    );
};

const PlayerStats = ({ playerStatList }) => {
    return (
        <div className='player-stats-container'>
            <h3 className='page-title text-2xl team-red'>Production per Game</h3>
            <div className='flex'>
                <div className='player-stats-table w-full lg:w-2/3'>
                    <div className='player-card sticky top-0 z-50'>
                        <div className='bg-teal-200 shadow-lg rounded h-12 player-card-content flex'>
                            <span className='flex-1 font-medium text-xl'>
                                <span className='block pl-4 pt-2'>
                                    Player
                                </span>
                            </span>
                            <span className='flex-1 grid place-items-center font-medium text-xl'>Goals</span>
                            <span className='flex-1 grid place-items-center font-medium text-xl'>Assists</span>
                            <span className='flex-1 grid place-items-center font-medium text-xl'>Points</span>
                        </div>
                    </div>
                    <div className='shadow-lg bg-white rounded p-4'>
                        {playerStatList.map(player => (<PlayerStat key={player.id} {...player} />))}
                    </div>
                </div>
                <div className='player-stat-description hidden lg:flex py-6 w-1/3'>
                    <span className='content text-white'>Goals, assists and points are calculated as an average for each game. Each column is the total for that statistic - divided by the number of games played.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default PlayerStats;