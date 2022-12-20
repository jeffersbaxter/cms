import { Link } from '@aws-amplify/ui-react';
import { Amplify, withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import awsExport from '../src/aws-exports';
import { listPlayers } from '../src/graphql/queries'
import styles from '../styles/Home.module.css'


Amplify.configure({ ...awsExport, ssr: true });


export default function Home({
  forwardsGoals,
  forwardsAssists, 
  forwardsPoints,
  defenseGoals, 
  defenseAssists, 
  defensePoints,
  rightyPoints,
  leftyPoints
}) {
  return (
    <div>
      <Head>
        <title>Seattle Hockey</title>
        <meta name="description" content="Analytics dashboard for nhl hockey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className='grid grid-cols-3 gap-4 w-full'>
          <div className='catalog-card max-h-60 flex w-full flex-wrap shadow-lg bg-white rounded p-4'>
            <div className='grid text-4xl w-full'>
              <span className='pt-4 away-blue-text'>All Skaters</span>
            </div>
            <div className='flex justify-between flex-wrap w-full'>
              <span className='grid md-blue-text text-2xl w-1/2'>Goals</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{forwardsGoals + defenseGoals}</span>
              <span className='grid md-blue-text text-2xl w-1/2'>Assists</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{forwardsAssists + defenseAssists}</span>
              <span className='grid md-blue-text text-2xl w-1/2'>Points</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{defensePoints}</span>
            </div>
            <span className='grid place-items-center text-sm text-teal-400 w-full'>
              <Link href="/season-stat-line">
                see more
              </Link>
            </span>
          </div>

          <div className='catalog-card max-h-60 flex w-full flex-wrap shadow-lg bg-white rounded p-4'>
            <div className='grid text-4xl w-full'>
              <span className='pt-4 away-blue-text'>Forwards</span>
            </div>
            <div className='flex justify-between flex-wrap w-full'>
              <span className='grid md-blue-text text-2xl w-1/2'>Goals</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{forwardsGoals}</span>
              <span className='grid md-blue-text text-2xl w-1/2'>Assists</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{forwardsAssists}</span>
              <span className='grid md-blue-text text-2xl w-1/2'>Points</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{forwardsPoints}</span>
            </div>
            <span className='grid place-items-center text-sm text-teal-400 w-full'>
              <Link href="/season-stat-line/forwards">
                see more
              </Link>
            </span>
          </div>
          <div className='catalog-card max-h-60 flex w-full flex-wrap shadow-lg bg-white rounded p-4'>
            <div className='grid text-4xl w-full'>
              <span className='pt-4 away-blue-text'>Defensemen</span>
            </div>
            <div className='flex justify-between flex-wrap w-full'>
              <span className='grid md-blue-text text-2xl w-1/2'>Goals</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{defenseGoals}</span>
              <span className='grid md-blue-text text-2xl w-1/2'>Assists</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{defenseAssists}</span>
              <span className='grid md-blue-text text-2xl w-1/2'>Points</span>
              <span className='grid team-red text-2xl w-1/2 text-right'>{defensePoints}</span>
            </div>
            <span className='grid place-items-center text-sm text-teal-400 w-full'>
              <Link href="/season-stat-line/defense">
                see more
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req })

  const { data } = await SSR.API.graphql({ query: listPlayers });
  const forwards = data.listPlayers.items.filter(player => player.position !== 'D')
  const defense = data.listPlayers.items.filter(player => player.position === 'D')
  const righties = data.listPlayers.items.filter(player => player.shoots === 'Right')
  const lefties = data.listPlayers.items.filter(player => player.shoots === 'Left')

  return {
    props: {
      players: data.listPlayers.items,
      forwardsGoals: forwards.reduce(((acc, curr) => (acc + curr.seasonalStatLine.goals)), 0),
      forwardsAssists: forwards.reduce(((acc, curr) => (acc + curr.seasonalStatLine.assists)), 0),
      forwardsPoints: forwards.reduce(((acc, curr) => (acc + curr.seasonalStatLine.points)), 0),
      defenseGoals: defense.reduce(((acc, curr) => (acc + curr.seasonalStatLine.goals)), 0),
      defenseAssists: defense.reduce(((acc, curr) => (acc + curr.seasonalStatLine.assists)), 0),
      defensePoints: defense.reduce(((acc, curr) => (acc + curr.seasonalStatLine.points)), 0),
      rightyPoints: righties.reduce(((acc, curr) => (acc + curr.seasonalStatLine.points)), 0),
      leftyPoints: lefties.reduce(((acc, curr) => (acc + curr.seasonalStatLine.points)), 0)
    }
  }


}

