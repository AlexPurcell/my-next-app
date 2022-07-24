import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Thread} from './components/Thread';

// import {CurrentDateTime} from './components/CurrentDateTime'

let Today = new Date();

let Month = Today.getMonth() + 1

const css = `
    body {
        background-color: white;
    }
`
import {Navbar} from './components/Navbar';

export default function Home() {
  return (
    <>
    <style>{css}</style>
     {/* <Navbar/> */}
     <Thread/>
     
    </>
  )
}
