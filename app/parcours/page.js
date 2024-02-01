'use client'
import React from 'react'
import MesCartes from '../components/home/MesCartes'
import Navbar from '../components/layout/Navbar'
import CardsDivider from '../components/home/CardsDivider'

const parcours = () => {
  return (
    <>
      <Navbar/>
      <MesCartes/>
      <CardsDivider />
    </>
  )
}

export default parcours