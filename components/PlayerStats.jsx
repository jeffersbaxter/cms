import Image from 'next/image'
import darkAvatarPng from '../public/dark-avatar-lg.png'
import lightAvatarPng from '../public/light-avatar-lg.png'
import { Card, CardContent } from '@material-ui/core';

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
                <div className='player-stats-table w-2/3'>
                    <Card className='player-card sticky top-0 z-50'>
                        <CardContent className='bg-teal-200 player-card-content flex'>
                            <span className='player-profile flex-1 font-medium text-xl'>Player</span>
                            {/* <div className='player-stat-glance flex-1'> */}
                            <span className='flex-1 grid place-items-center font-medium text-xl'>Goals</span>
                            <span className='flex-1 grid place-items-center font-medium text-xl'>Assists</span>
                            <span className='flex-1 grid place-items-center font-medium text-xl'>Points</span>
                            {/* </div> */}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            {playerStatList.map(player => (<PlayerStat key={player.id} {...player} />))}
                        </CardContent>
                    </Card>
                </div>
                <div className='player-stat-description py-10 w-1/3'>
                    <span className='content text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default PlayerStats;