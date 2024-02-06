'use client'
import React from 'react'
import MesCartes from '../components/home/MesCartes'
import NosCartes from '../components/home/NosCartes'
import Navbar from '../components/layout/Navbar'
import CardsDivider from '../components/home/CardsDivider'
import AllUsers from '../components/layout/AllUsers'

const parcours = () => {
  return (
    <>
      <Navbar/>
      <MesCartes/>
      <CardsDivider />
      <NosCartes />
    </>
  )
}

export default parcours