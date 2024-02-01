'use client'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import GraphFlow from '../components/ReactFlow/GraphFlow'

const graph = () => {
  return (
    <>
      <Navbar />
      <GraphFlow />
    </>
  )
}

export default graph