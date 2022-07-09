import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


var Today = new Date();

export default function Home() {
  return (
    <>
    
    <div className='header'>
      <h1 id='firstText'>Coming Soon</h1>
    </div>
    <div>
      <h1 id='timerText'>Today's Date</h1>
      <hr className='hrLine' color='greenyellow'/>
    </div>
    <div>
      <h1 id='timer'>{Today.getMonth() + "/" + Today.getUTCDate() + "/" + Today.getFullYear()}</h1>
    </div>
    </>
  )
}
