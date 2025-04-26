import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Footer from './components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>How It Works - AI Recruiter</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Herosection />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </>
  )
}