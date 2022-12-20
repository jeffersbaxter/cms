import { Link } from '@aws-amplify/ui-react';
import { Amplify, withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import Widget from '../components/widget';
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
  const allSkaterDetailList = [{label: "Goals", value: forwardsGoals + defenseGoals}, {label: "Assists", value: forwardsAssists + defenseAssists}, {label: "Points", value: forwardsPoints + defensePoints}];
  const forwardDetailList = [{label: "Goals", value: forwardsGoals}, {label: "Assists", value: forwardsAssists}, {label: "Points", value: forwardsPoints}]
  const defenseDetailList = [{label: "Goals", value: defenseGoals}, {label: "Assists", value: defenseAssists}, {label: "Points", value: defensePoints}]
  return (
    <div>
      <Head>
        <title>Seattle Hockey</title>
        <meta name="description" content="Analytics dashboard for nhl hockey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className='flex content-start flex-wrap gap-0 w-full'>
          <Widget title="All Skaters" detailList={allSkaterDetailList} seeMoreLink="/season-stat-line" />
          <Widget title="Forwards" detailList={forwardDetailList} seeMoreLink="/season-stat-line/forwards" />
          <Widget title="Defensemen" detailList={defenseDetailList} seeMoreLink="/season-stat-line/defense" />
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

