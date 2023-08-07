'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <button><Link href='./avatars'>Avatars Table</Link></button>
      <button><Link href='./devices'>Devices Table</Link></button>
      <button><Link href='./employees'>Employees Table</Link></button>
      <button><Link href='./schedules'>Schedules Table</Link></button>
      <button><Link href='./stores'>Store Table</Link></button>
      <button><Link href='./vehicles'>Vehicles Table</Link></button>
      

      
      
    </main>
  )
}
