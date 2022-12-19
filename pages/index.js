import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, CardContent } from '@material-ui/core';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className='grid grid-cols-3 gap-4 w-full p-4'>
          <Card className='catalog-card'>
            <CardContent>
              dummy 1
            </CardContent>
          </Card>
          <Card className='catalog-card col-span-2'>
            <CardContent>
              dummy 2
            </CardContent>
          </Card>
          <Card className='catalog-card col-span-2'>
            <CardContent>
              dummy 3
            </CardContent>
          </Card>
          <Card className='catalog-card'>
            <CardContent>
              dummy 4
            </CardContent>
          </Card>
          <Card className='catalog-card'>
            <CardContent>
              dummy 5
            </CardContent>
          </Card>
          <Card className='catalog-card'>
            <CardContent>
              dummy 6
            </CardContent>
          </Card>
          <Card className='catalog-card'>
            <CardContent>
              dummy 7
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

